const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

//Logs message
gulp.task('message', function (){
  return console.log('Gulp is running...')
});

//Copy all root files
gulp.task('copyRoot', function(){
  gulp.src('src/*')
      .pipe(gulp.dest('dist'))
});

//Copy all includes
gulp.task('copyIncludes', function(){
  gulp.src('src/includes/*')
      .pipe(gulp.dest('dist/includes'))
});

//Copy ES6 JS
gulp.task('copyES6', function(){
  gulp.src('src/js/*.js')
      .pipe(gulp.dest('dist/js'))
});

//Optimise images
gulp.task('imageMin', function(){
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});

//Compile Sass
gulp.task('sass', function(){
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
});

gulp.task ('default', ['message', 'copyRoot', 'copyIncludes', 'copyES6', 'imageMin', 'sass']);

gulp.task ('watch', function(){
  gulp.watch('src/js/*.js', ['copyES6']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/*', ['copyRoot']);
  gulp.watch('src/includes/*', ['copyIncludes']);
});
