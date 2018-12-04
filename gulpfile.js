var gulp = require('gulp');
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var sourcemaps = require('gulp-sourcemaps');
var serve = require('gulp-serve');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber'); //Catch on error. By default watch task is
var minify = require('gulp-minify');


// Setting variables
var jquery = './node_modules/jquery/dist/jquery.slim.js';
var popper = './node_modules/popper.js/dist/umd/popper.min.js';
var bootstrap = './node_modules/bootstrap/dist/js/bootstrap.js';

//Docs https://www.npmjs.com/package/gulp-sass
var paths = {}
paths.scss = ["./scss/**/*.scss", "./assets/scss/**/*.scss"];
paths.js = ['js/*.js'];

paths.jsBundle = [
    './node_modules/jquery/dist/jquery.slim.js',
    './node_modules/popper.js/dist/umd/popper.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.js',
    './dist/js/unicef.js'
]
paths.all = paths.scss.concat(paths.js);

function compressJs(paths, destinationFileName) {
    gulp.src(paths)
      .pipe(plumber()) //By default task ends if there is an error. This avoids it.
      .pipe(sourcemaps.init())
      .pipe(concat(destinationFileName))
      .pipe(minify())
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest('./dist/js'))
}

gulp.task('js', function() {
  compressJs(paths.js,'unicef.js');
});

gulp.task('js-bundle', function() {
  compressJs(paths.jsBundle, 'unicef-bundle.js');
});


// compile sass
gulp.task('scss', function() {
  gulp.src(paths.scss)
  .pipe(plumber()) //By default task ends if there is an error. This avoids it.
  .pipe(sourcemaps.init())
  .pipe(sass())
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
