// Module Imports
const gulp = require('gulp')
const sass = require("gulp-sass")
const uglify = require("gulp-uglify")
const sourcemaps = require('gulp-sourcemaps')
const serve = require('gulp-serve')
const concat = require('gulp-concat')
const plumber = require('gulp-plumber') //Catch on error. By default watch task is
const minify = require('gulp-minify')
const minifyCss = require('gulp-minify-css')
const svgo = require('gulp-svgo')
const babel = require('gulp-babel')

// Path settings
var paths = {}
paths.scss = ["./scss/**/*.scss", "./assets/scss/**/*.scss"]
paths.js = ['js/*.js']
paths.jsBundle = [
  './node_modules/jquery/dist/jquery.slim.js',
  './node_modules/popper.js/dist/umd/popper.min.js',
  './node_modules/bootstrap/dist/js/bootstrap.js',
  './dist/js/unicef.js'
]
paths.svg = ["./assets/images/**/*.svg"]
paths.all = paths.scss.concat(paths.js).concat(paths.svg)


function compressJs(paths, destinationFileName, useBabel = false) {
  if (useBabel) {
    return gulp.src(paths)
      .pipe(plumber()) //By default task ends if there is an error. This avoids it.
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(concat(destinationFileName))
      .pipe(minify({ ext: { min: '.min.js' } }))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest('./dist/js'))
  }
  return gulp.src(paths)
    .pipe(plumber()) //By default task ends if there is an error. This avoids it.
    .pipe(sourcemaps.init())
    .pipe(concat(destinationFileName))
    .pipe(minify({ ext: { min: '.min.js' } }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest('./dist/js'))
}

// create one single file for ONLY the internal js of this pacakge (no vendors)
function js() {
  return compressJs(paths.js, 'unicef.js', true)
}

// bundle all js into one single file inclugin all vendor js (bootstrap, popper, etc..)
function jsBundle() {
  return compressJs(paths.jsBundle, 'unicef-bundle.js')
}

// Optimizes SVG files
function svg() {
  return gulp.src(paths.svg)
    .pipe(svgo())
    .pipe(gulp.dest('./assets/images'))
}


function scss() {
  return gulp.src(paths.scss)
    .pipe(plumber()) //By default task ends if there is an error. This avoids it.
    .pipe(sourcemaps.init())
    .pipe(sass())
   // .pipe(minifyCss())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist/css"))
}


// watch-sass
function watchScss() {
  gulp.watch(paths.scss, gulp.series(scss))
}

// watch-js
function watchJs() {
  gulp.watch(paths.js, gulp.series(js, jsBundle))
}

// watch everything (js and scss)
function watch() {
  gulp.watch(paths.scss, gulp.series(scss))
  gulp.watch(paths.js, gulp.series(js, jsBundle))

}

// Exported tasks
exports.scss = scss
scss.description = 'Creates unicef.css'
exports.js = js
js.description = 'Creates dist/js/unicef.js'
exports.jsBundle = jsBundle
jsBundle.description = 'Creates dist/js/unicef-bundle.js'
exports.svg = svg
svg.description = 'Applies compression to SVG images'
exports.watchScss = watchScss
watchScss.description = 'Watches changes in SCSS files to generate dist/CSS files'
exports.watchJs = watchJs
watchJs.description = 'Watches changes in JavaScript files to generate dist/js files'

exports.watch = watch
watch.description = 'Watches changes in JS and SCSS to generate dist files'