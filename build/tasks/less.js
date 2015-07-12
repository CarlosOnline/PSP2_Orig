var gulp = require('gulp');
var gutil = require('gulp-util');
var debug = require('gulp-debug');
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var assign = Object.assign || require('object.assign');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  return gulp.src(paths.less, {base: "."})
    //.pipe(debug({title: 'less'}))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.output));
});

