var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('less', function () {
	gulp.src('src/less/*.less')
		.pipe(less({paths: [path.join(__dirname, 'less', 'includes')]}))
		.pipe(gulp.dest('assets/css'));
});
gulp.task('styles', function () {
	gulp.src(['src/bower/fullpage.js/jquery.fullPage.css'])
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest('assets/css'));
});
gulp.task('scripts', function () {
	gulp.src([
			'src/bower/jquery/dist/jquery.js',
			'src/bower/angular/angular.js',
			'src/bower/angular-ui-router/release/angular-ui-router.js',
			'src/bower/fullpage.js/jquery.fullPage.js',
			'src/bower/angular-fullpage.js/angular-fullpage.js'
		])
		.pipe(ngAnnotate())
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('assets/js'));
	gulp.src(['src/js/*.js'])
		.pipe(ngAnnotate())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('assets/js'));
});
gulp.task('default', function () {
	gulp.watch('src/**', ['less', 'styles', 'scripts']);
});