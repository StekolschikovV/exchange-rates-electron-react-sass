let gulp = require('gulp'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    cssmin = require('gulp-cssmin'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch')

var src = [
    // './lib/react.js',
    // './lib/react-dom.js',
    './src/components/*.jsx',
    './src/index.jsx'
]

gulp.task('react', function () {
    return gulp.src(src)
        .pipe(concat('script.js'))
        .pipe(babel({
            presets: [
                'es2015',
                'react'
            ]
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./'))
})
gulp.task('sass', function (){
    sass('./src/sass/*.sass')
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('./'))
})

gulp.task('dev', function () {
    gulp.watch(src, ['react'])
    gulp.watch('./src/sass/*.sass', ['sass'])
})