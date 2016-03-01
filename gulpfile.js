var gulp            = require('gulp');
var inject          = require('gulp-inject');
var bower           = require('main-bower-files');
var sass            = require('gulp-ruby-sass');
var jshint          = require('gulp-jshint');
var angularFilesort = require('gulp-angular-filesort');

gulp.task('inject', function () {
    return gulp.src('app/index.html')
        .pipe(inject(gulp.src(bower(), {read: false}), {starttag: '<!-- inject:bower:{{ext}} -->'}))
        .pipe(inject(gulp.src('app/modules/**/*.js').pipe(angularFilesort()), {read: false}))
        .pipe(inject(gulp.src('app/styles/**/*.css'), {read: false}))
        .pipe(gulp.dest('app'));
});

gulp.task('sass', function () {
    return sass('app/styles/sass/main.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('app/styles'));
});

gulp.task('jshint', function () {
    return gulp.src('app/modules/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function () {
    gulp.watch(['app/modules/**/*.js', 'app/styles/**/*.css', 'bower_components/**/*.js'], ['inject']);
    gulp.watch(['app/styles/sass/**/*.scss'], ['sass']);
});
