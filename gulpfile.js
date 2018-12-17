// Module Imports
var gulp = require('gulp');
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var sourcemaps = require('gulp-sourcemaps');
var serve = require('gulp-serve');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber'); //Catch on error. By default watch task is
var minify = require('gulp-minify');
var minifyCss = require('gulp-minify-css');
var svgo = require('gulp-svgo');

// Path settings
var paths = {}
paths.scss = ["./scss/**/*.scss", "./assets/scss/**/*.scss"];
paths.js = ['js/*.js'];
paths.jsBundle = [
    './node_modules/jquery/dist/jquery.slim.js',
    './node_modules/popper.js/dist/umd/popper.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.js',
    './dist/js/unicef.js'
]
paths.svg = ["./assets/images/**/*.svg"];
paths.all = paths.scss.concat(paths.js).concat(paths.svg);

function compressJs(paths, destinationFileName) {
    gulp.src(paths)
      .pipe(plumber()) //By default task ends if there is an error. This avoids it.
      .pipe(sourcemaps.init())
      .pipe(concat(destinationFileName))
      .pipe(minify({ext: { min:'.min.js'}}))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest('./dist/js'))
}

// create one single file for ONLY the internal js of this pacakge (no vendors)
gulp.task('js', function() {
  compressJs(paths.js,'unicef.js');
});

// bundle all js into one single file inclugin all vendor js (bootstrap, popper, etc..)
gulp.task('js-bundle', function() {
  compressJs(paths.jsBundle, 'unicef-bundle.js');
});

// Optimizes SVG files
gulp.task('svgo', function() {
  gulp.src(paths.svg)
    .pipe(svgo())
    .pipe(gulp.dest('./assets/images'));
});

// compile sass
gulp.task('scss', function() {
  gulp.src(paths.scss)
  .pipe(plumber()) //By default task ends if there is an error. This avoids it.
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(minifyCss())
  .pipe(sourcemaps.write("./"))
  .pipe(gulp.dest("./dist/css"));
});

// watch-sass
gulp.task('watch-scss', function() {
  gulp.watch(paths.scss, ['scss']);
})

// watch-js
gulp.task('watch-js', function() {
  gulp.watch(paths.js, ['js']);
})


// watch everything (js and scss)
gulp.task('watch', function() {
  gulp.watch(paths.all, ['scss','js','js-bundle']);
})

//gulp.task('serve', serve('.'));
