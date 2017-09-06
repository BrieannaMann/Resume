var gulp = require('gulp'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	watch= require('gulp-watch'),
  minifyCSS= require('gulp-minify-css')
	browserSync = require('browser-sync'),
  reload = browserSync.reload;




gulp.task('sass', function() {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(concat('build.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist'));
   
});
 gulp.task("watch", function(){    
    gulp.watch("./scss/*.scss",['sass']);
});

gulp.task('browser-sync', function() {
   browserSync.init({
       server: {
           baseDir: "./"
       }
   });
   gulp.watch(["*.html", "./css/*.css", "./jsjs/*.js"]).on('change', reload);
});

gulp.task('concat', function() {
    gulp.src('./comp/js/*.js')
        .pipe(concat('build.js'))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(["*.html", "./dist/*.css", "./dist/*.js"]).on('change', reload);
    });