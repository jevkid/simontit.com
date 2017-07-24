var gulp = require('gulp'),
    jade = require('gulp-jade'),
    concat = require('gulp-concat'),
    postcss = require('gulp-postcss'),
    rename = require('gulp-rename'),
    webserver = require('gulp-webserver'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    less = require('gulp-less');

gulp.task('serve', function() {
    connect.server();
    gulp.src('./public')
        .pipe(webserver({
            port:'8080',
            open: true
        }));
});

gulp.task('build-less', function(){
    return gulp.src('./source/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./public/assets/stylesheets'));
});

gulp.task('build-jade', function(){
    return gulp.src('./source/templates/index.jade')
        .pipe(jade())
        .pipe(gulp.dest('./public'));
    return gulp.src('./source/templates/layout.jade')
        .pipe(jade())
        .pipe(gulp.dest('./public'));
});

gulp.task('default', ['build-less', 'build-jade', 'serve']);

gulp.task('dev', ['default', 'watch']);

gulp.task('watch', function() {
    gulp.watch('./source/less/main.less', ['build-less']);
    gulp.watch('./public/assets/stylesheets/bootstrap.css');
    gulp.watch('./public/assets/javascripts/app.js');
    gulp.watch('./public/assets/images/*');
    gulp.watch('./public/assets/stylesheets/font-awesome.css');
    gulp.watch('./source/templates/index.jade', ['build-jade']);
    gulp.watch('./source/templates/layout.jade', ['build-jade']);
});
