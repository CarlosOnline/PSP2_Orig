var path = require('path');

var appRoot = 'src/';
var outputRoot = 'dist/';

var path2 = {
  sourceTS: "views/**/*.ts",
  sourceJS: "views/**/*.js",
  html: "views/**/*.html",
  style: "styles/**/*.css",
  less: "less/**/*.less",
  allTS: [
      './views/**/*.ts',
      './typings/**/*.d.ts',
      './*.ts'
    ],
};

module.exports = {
  less: "less/**/*.less",
  allTS: [
      './views/**/*.ts',
      './typings/**/*.d.ts',
      './*.ts'
    ],
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: 'styles/**/*.css',
  output: outputRoot,
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};

//module.exports = {
//  sourceTS: "views/**/*.ts",
//  sourceJS: "views/**/*.js",
//  html: "views/**/*.html",
//  style: "styles/**/*.css",
//  less: "less/**/*.less",
//  allTS: [
//      './views/**/*.ts',
//      './typings/**/*.d.ts',
//      './*.ts'
//    ],
//  root: appRoot,
//  source: appRoot + '**/*.js',
//  //html: appRoot + '**/*.html',
//  libs: 'libs/**/*.js',
//  json: appRoot + '**/*.json',
//  style: 'styles/**/*.css',
//  //less: 'styles/**/*.less',
//  outputFolder: outputRoot,
//  output: '.',
//  sourceMapRelativePath: '../' + appRoot,
//  doc:'./doc',
//  e2eSpecsSrc: 'test/e2e/src/*.js',
//  e2eSpecsDist: 'test/e2e/dist/'
//};
