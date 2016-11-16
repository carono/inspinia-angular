var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

var paths = {
  sass: ['./scss/**/*.scss'],
  controllers: ['./js/controllers/*.js']
};

gulp.task('controllers', function () {
  return gulp.src('./js/controllers/*.js')
      .pipe(concat('controllers.js'))
      .pipe(gulp.dest('./js/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.controllers, ['controllers']);
});