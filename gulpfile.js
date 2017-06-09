var options = {
	src: './src/',
	dist: './dist/',
	bower: './bower_components'
};

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var mainBowerFiles = require('main-bower-files');

// Clean up all scripts
gulp.task('scripts', function() {
	return gulp.src(options.src + '/js/*')
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(options.dist + 'js'));
});

gulp.task('bower-dependencies', function() {
    return gulp.src(mainBowerFiles()).pipe(gulp.dest(options.dist + 'vendor'));
});

gulp.task('default', ['scripts', 'bower-dependencies']);