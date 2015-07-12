var gulp = require('gulp');
//var gutil = require('gulp-util');
var debug = require('gulp-debug');
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');
var merge = require('merge2');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var path = require('path');
//var through = require('through2');

var onError = function (err) {
  console.log(err);
};

gulp.task('build-ts', function () {
    var tsResult = gulp.src(paths.allTS, {base: "."})
    //.pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(ts({
         typescript: require('typescript'),
         declarationFiles: false,
         noExternalResolve: true,
         target: "es5",
         module: "amd",
         emitDecoratorMetadata: true
    }));

    tsResult.js.pipe(sourcemaps.write());

    return merge([
        tsResult.dts.pipe(gulp.dest(paths.output)),
        tsResult.js.pipe(gulp.dest(paths.output))
    ]);
});

gulp.task('null', function () {

});

// this task calls the clean task (located
// in ./clean.js), then runs the rest in parallel
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    [
      //'build-es6',
      'build-ts',
      'less',
      //'copy-files',
      'null',
    ],
    callback
  );
});

