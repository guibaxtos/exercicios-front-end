const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify'); 

function compilaSass(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./build/styles'));
}

function watchSass(){
    gulp.watch('./source/styles/*.scss', compilaSass);
}

function otimizaImagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function minificaJS(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts'));
}

exports.compilaSass = compilaSass
exports.watch = watchSass
exports.otimizaImagens = otimizaImagens
exports.minificaJS = minificaJS