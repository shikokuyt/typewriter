var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat');

// 压缩主代码代码
gulp.task('minify', function () {
    gulp.src('./src/js/typewrite.js')
        .pipe(uglify())
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(gulp.dest('dist/dev'));
});

// 压缩辅助代码
gulp.task('minifyLib', function () {
  gulp.src('./src/js/lib/*.js')
      .pipe(uglify())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('dist/lib'));
});

gulp.task('ys', function () {
  gulp.src(['./src/js/lib/*.js', './src/js/typewrite.js'])
      .pipe(uglify())
      .pipe(concat('typewrite.0.0.1.js'))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('dist'));
});

gulp.task('default', ['minify', 'minifyLib', 'ys']);
