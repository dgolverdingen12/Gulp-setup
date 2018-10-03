'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
// var nano = require('gulp-cssnano');

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  done();
}

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    // .pipe(nano())
    .pipe(gulp.dest('./'))
})

gulp.task('watch', gulp.series('sass', function() { 
	gulp.watch('scss/**/*.scss').on('change', gulp.parallel('sass'));
}));

  gulp.task('default'['watch', 'sass']);
