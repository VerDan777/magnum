const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });

    // pug
    watch('./src/*.pug', function() {
        gulp.start('pugRender');
    });

    // html 
    watch('./dist/*.html', function() {
        browserSync.reload();
    })

    // styles
    watch('./src/sass/**/*.scss', function() {
        gulp.start('cssInject');
    })

    // scripts

    // wordpress
});

gulp.task('cssInject', ['styles'], function() {
    gulp.src('./dist/styles.css')
        .pipe(browserSync.stream());
});