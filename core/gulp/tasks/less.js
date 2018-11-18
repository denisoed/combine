const config = require('../../../options/config');
const gulp           = require('gulp'),
	less           = require('gulp-less'),
    cleanCSS       = require('gulp-clean-css'),
	rename         = require('gulp-rename'),
    browserSync    = require('browser-sync'),
	notify         = require('gulp-notify'),
	autoprefixer   = require('gulp-autoprefixer');
		
let pathDev = '../../' + config.paths.dev,
	pathStage = '../../' + config.paths.staging;

gulp.task('less', ['styles'], function() {
	return gulp.src([pathDev + '/less/*.less', '!' + pathDev + '/less/_*.less'])
		.pipe(less({outputStyle: 'expand'}).on('error', notify.onError()))
		.pipe(rename({suffix: '.min', prefix : ''}))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(cleanCSS()) // Comment out when debugging
		.pipe(gulp.dest(pathStage + '/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('styles', function() {
	return gulp.src([pathDev + '/less/styles/*.less', '!' + pathDev + '/less/styles/_*.less'])
		.pipe(less({outputStyle: 'expand'}).on('error', notify.onError()))
		.pipe(rename({suffix: '.min', prefix : ''}))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(cleanCSS())
		.pipe(gulp.dest(pathStage + '/css/styles'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('critical', function() {
	return gulp.src([pathDev + '/less/critical/*.less', '!' + pathDev + '/less/critical/_*.less'])
		.pipe(less({outputStyle: 'expand'}).on('error', notify.onError()))
		.pipe(rename({suffix: '.min', prefix : ''}))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(cleanCSS())
		.pipe(gulp.dest(pathStage + '/css/critical'))
		.pipe(browserSync.reload({stream: true}))
});