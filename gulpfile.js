var gulp = require('gulp');
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var sourcemaps = require('gulp-sourcemaps');
var serve = require('gulp-serve');
var plumber = require('gulp-plumber'); //Catch on error. By default watch task is

//Docs https://www.npmjs.com/package/gulp-sass
var paths = {}
paths.scss = ["./scss/**/*.scss"];

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
