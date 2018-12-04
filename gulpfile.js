var gulp = require('gulp');
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var sourcemaps = require('gulp-sourcemaps');
var serve = require('gulp-serve');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber'); //Catch on error. By default watch task is
const minify = require('gulp-minify');
var jquery = './node_modules/jquery/dist/jquery.slim.js';
var popper = './node_modules/popper.js/dist/umd/popper.min.js';
var bootstrap = './node_modules/bootstrap/dist/js/bootstrap.js';

gulp.task('compress', function() {
  gulp.src([ jquery, popper, bootstrap, 'js/*.js'])
    .pipe(concat('unicef-bundle.js'))
    .pipe(minify())
    .pipe(gulp.dest('./dist/js'))
});

//Docs https://www.npmjs.com/package/gulp-sass
var paths = {}
paths.scss = ["./scss/**/*.scss", "./assets/scss/**/*.scss"];
// compile sass
gulp.task('sass', function() {
  gulp.src(paths.scss)
  .pipe(plumber()) //By default task ends if there is an error. This avoids it.
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write("./"))
  .pipe(gulp.dest("./dist/css"));
});

// watch-sass
gulp.task('watch-sass', function() {
  gulp.watch(paths.scss, ['sass']);
})

gulp.task('serve', serve('.'));
