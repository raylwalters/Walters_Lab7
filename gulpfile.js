'use strict';

var gulp = require("gulp");
var browserSync = require("browser-sync");
var concat = require("gulp-concat");
var gulp = require('gulp');
var Sass = require('gulp-sass');

gulp.task("browser-sync", function(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./*.css").on("change", browserSync.reload);
  gulp.watch("./*.js").on("change", browserSync.reload);
});
	

gulp.task("concatScripts", function(){
	gulp.src(["jquery.js", "reveal.js", "main.js", "script.js"])
	.pipe(concat("app.js"))
	.pipe(gulp.dest("js"));
});


gulp.task('Sass', function () {
return gulp.src('./Sass/**/*.scss')
.pipe(Sass().on('error', Sass.logError))
.pipe(gulp.dest('./css'));
});
gulp.task('Sass:watch', function () {
gulp.watch('./Sass/**/*.scss', ['Sass']);
});