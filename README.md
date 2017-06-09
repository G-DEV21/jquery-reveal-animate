# jquery-reveal-animate
Reveal Animation with Animate.css

## Installation

To install via Bower, simply do the following:

```bash
$ bower install animate.css --save


## Basic Usage

1. Include the `animate.css` package in the document `<head>`

	```html
 	<head>
    	<link rel="stylesheet" href="/dist/vendor/animate.css">
  	</head>
  	```

  	or use include animate.css from [CDNJS](https://cdnjs.com/libraries/animate.css)

  	```html
  	<head>
    	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
  	</head>
  	```

2. Include `jQuery` in either the `<head>` or at the end of `<body>`
	```html
 	<head>
    	<script type="javascript" href="/dist/vendor/jquery.js" />
  	</head>
  	```

  	or use include jquery.js from CDN

  	```html
  	<head>
    	<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script
  	</head>
  	```

3. Add `jQuery-reveal-animate` at the end of `<body>`
	```html
 	<body>
    	<script type="javascript" href="/dist/js/jquery-reveal-animate.min.js" />
  	</body>
  	```

3. On the element that you want to add the scroll-revealed animation, add `reveal-animate` either as class or attribute

4. Specify the animate type with `data-animate-easing` - here are a list of available animations supported by [Animate.css](https://github.com/daneden/animate.css/tree/3.5.2)
  * `bounce`
  * `flash`
  * `pulse`
  * `rubberBand`
  * `shake`
  * `headShake`
  * `swing`
  * `tada`
  * `wobble`
  * `jello`
  * `bounceIn`
  * `bounceInDown`
  * `bounceInLeft`
  * `bounceInRight`
  * `bounceInUp`
  * `bounceOut`
  * `bounceOutDown`
  * `bounceOutLeft`
  * `bounceOutRight`
  * `bounceOutUp`
  * `fadeIn`
  * `fadeInDown`
  * `fadeInDownBig`
  * `fadeInLeft`
  * `fadeInLeftBig`
  * `fadeInRight`
  * `fadeInRightBig`
  * `fadeInUp`
  * `fadeInUpBig`
  * `fadeOut`
  * `fadeOutDown`
  * `fadeOutDownBig`
  * `fadeOutLeft`
  * `fadeOutLeftBig`
  * `fadeOutRight`
  * `fadeOutRightBig`
  * `fadeOutUp`
  * `fadeOutUpBig`
  * `flipInX`
  * `flipInY`
  * `flipOutX`
  * `flipOutY`
  * `lightSpeedIn`
  * `lightSpeedOut`
  * `rotateIn`
  * `rotateInDownLeft`
  * `rotateInDownRight`
  * `rotateInUpLeft`
  * `rotateInUpRight`
  * `rotateOut`
  * `rotateOutDownLeft`
  * `rotateOutDownRight`
  * `rotateOutUpLeft`
  * `rotateOutUpRight`
  * `hinge`
  * `jackInTheBox`
  * `rollIn`
  * `rollOut`
  * `zoomIn`
  * `zoomInDown`
  * `zoomInLeft`
  * `zoomInRight`
  * `zoomInUp`
  * `zoomOut`
  * `zoomOutDown`
  * `zoomOutLeft`
  * `zoomOutRight`
  * `zoomOutUp`
  * `slideInDown`
  * `slideInLeft`
  * `slideInRight`
  * `slideInUp`
  * `slideOutDown`
  * `slideOutLeft`
  * `slideOutRight`
  * `slideOutUp`

5. Allow looping the animate with attribute `data-animate-infinite`. 
	

Full Example:


```html
<div reveal-animate data-animate-easing="jackInTheBox" data-animate-infinite="true"> ...DEMO DATA </div>
```

## License
Animate.css is licensed under the MIT license. (http://opensource.org/licenses/MIT)