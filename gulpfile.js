var options = {
	src: './src/',
	dist: './dist/',
	bower: './bower_components'
};

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var copy = require('gulp-copy');
var mainBowerFiles = require('main-bower-files');

// Clean up all scripts
gulp.task('scripts', function() {
	gulp.src(options.src + 'js/*')
		.pipe(jshint())
		.pipe(gulp.dest(options.dist + 'js'));

	gulp.src(options.dist + 'js/*')
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(options.dist + 'js'));
});

gulp.task('bower-dependencies', function() {
    return gulp.src(mainBowerFiles()).pipe(gulp.dest(options.dist + 'vendor'));
});

gulp.task('default', ['scripts', 'bower-dependencies']);