var gulp = require("gulp"),
    ts = require("gulp-typescript"),
    sass = require('gulp-sass'),
    jade = require('gulp-jade');

gulp.task('jade', function() {

  gulp.src('source/**/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('sass', function () {
  gulp.src('source/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build'));
});

gulp.task("typescript", function () {
  var tsProject = ts.createProject("tsconfig.json");
  // TODO: Use sourcemaps plugin instead of config
  var tsResult = tsProject.src()
    .pipe(ts(tsProject));

  return tsResult.js.pipe(gulp.dest("build"));
});

gulp.task("watch", function() {
  gulp.watch("source/**/*.ts", ["typescript"]);
  gulp.watch("source/**/*.scss", ["sass"]);
  gulp.watch("source/**/*.jade", ["jade"]);
});

gulp.task("default", ["watch", "typescript", "sass", "jade"]);
