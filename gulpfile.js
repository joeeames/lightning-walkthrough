var angularTemplateCache = require('gulp-angular-templatecache');
var gulp = require('gulp');

// function prepareTemplates() {
//   return gulp.src('public/**/*.html')
//     //.pipe(minify and preprocess the template html here)
//     .pipe(angularTemplateCache());
// }

gulp.task('default', function () {
  return gulp.src('public/**/*.html')
    .pipe(angularTemplateCache())
    .pipe(gulp.dest('public'));
});