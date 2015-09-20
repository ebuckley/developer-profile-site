var browserify = require('browserify'),
	gulp = require('gulp'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	gutil = require('gulp-util'),
	ngAnnotate = require('gulp-ng-annotate'),
	less = require('gulp-less');

gulp.task('javascript', function () {
	var b = browserify({
		entries: './index.js',
		debug: true
	});
''
	return b.bundle()
		.pipe(source('index.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps:true}))
			//transform tasks
			.pipe(ngAnnotate())
			// .pipe(uglify())
			.on('error', gutil.log)
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/js'));
});

gulp.task('less', function () {
	return gulp.src('./less/**/*.less')
		.pipe(less({}))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('assets', function () {
	return gulp.src('index.html')
		.pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['javascript', 'less', 'assets']);