(function($) {

	if (typeof $.fn.revealAnimate !== 'undefined') {
		console.error('Unable to initialize jQuery Reveal Animate.');
		return;
	}

	$.fn.revealAnimate = function() {
		var _defaultOptions = {
				easing: 'slideInUp',
				infinite: false
			},
			_animatedClass = 'animated',
			_domList = {},
			_randPrecision = 6,
			_eventPrefix = 'reveal-animate-',
			_animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			_dataKey = 'reveal-animate';

		var _isInView = function($element) {
			var _currentViewTop = $(window).scrollTop(),
				_currentTargetTop = $element.offset().top;
				_currentTargetBottom = _currentTargetTop + $element.height();
			
			var bound = {
				top: _currentViewTop,
				bottom: _currentViewTop + $(window).height()
			};

			var _inBound = (_currentTargetTop >= bound.top && _currentTargetTop <= bound.bottom) || (_currentTargetBottom  >= bound.top && _currentTargetBottom <= bound.bottom);

			return _inBound;
		};

		var _animate = function($element) {
			var _options = $element.data(_dataKey);

			if (_options) {
				var _easing = _options.hasOwnProperty('easing') ? _options.easing : '',
					_infinite = _options.hasOwnProperty('infinite') ? _options.infinite : false;
				var _animationClass = _animatedClass + ' ' + _easing + (_infinite ? ' infinite' : '');
				$element.addClass(_animationClass);
				
				if (!_infinite) {
					$element.one(_animationEndEvent, function() {
						$(this).removeClass(_animationClass);
					});
				}
			}
		};

		var _getUUID = function() {
			var _sed = (new Date()).getMilliseconds(),
				_uuid = Math.floor(Math.random() * Math.pow(10, _randPrecision)).toFixed(0) + _sed;

			return _uuid;
		};

		var _domExists = function($element) {
			var _exists = false;

			$.each(_domList, function(uuid, _dom) {
				if (_dom === $element.get(0)) {
					_exists = true;
					return false;	
				}
			});

			return _exists;
		};

		var _insertDom = function($element, options) {
			var _uuid = _getUUID(),
				_options = $.extend({}, _defaultOptions, options);

			while (_domList.hasOwnProperty(_uuid)) {
				_uuid = _getUUID();
			}

			if (!_domExists($element)) {
				_domList[_uuid] = $element.get(0);
				$element.data(_dataKey, _options);

				$element.one(_eventPrefix + _uuid, function() {
					_animate($element);
				});	

				_animateDom(_uuid, _domList[_uuid]);
			}
		};

		var _removeDom = function(uuid) {
			if (_domList.hasOwnProperty(uuid)) {
				var $element = $(_domList[uuid]);
				$element.off(_eventPrefix + uuid);
				delete _domList[uuid];
			}
		};

		var _initDom = function($element, options) {
			_insertDom($element, options);
		};

		var _animateDom = function(uuid, dom) {
			var $element = $(dom);
			if (_isInView($element)) {
				$element.trigger(_eventPrefix + uuid);
				_removeDom(uuid);
			}
		};

		$(document).bind('scroll', function() {
			$.each(_domList, function(uuid, dom) {
				_animateDom(uuid, dom);
			});
		});

		return this.each(function(options) {
			var $element = $(this),
				_options = {};
			
			$.each(_defaultOptions, function(key) {
				var _dataKey = 'animate' + key.charAt(0).toUpperCase() + key.slice(1);
				if ($element.data(_dataKey)) {
					_options[key] = $element.data(_dataKey);
				}
			});

			_insertDom($element, _options);
		});
	};

	$('[reveal-animate], .reveal-animate').revealAnimate();
}(jQuery));