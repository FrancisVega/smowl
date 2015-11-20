

    ////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                        //
    //  Secuoyas Gulp File - Secuoyas (c) 2015                                                //
    //                                                                                        //
    ////////////////////////////////////////////////////////////////////////////////////////////


    'use strict';

    //
    // Secuoyas 2015
    // Web site 2015
    //

    //
    // GULP PLUGINS
    //

    // Gulp itself
    var gulp         = require('gulp');
    // General
    var postcss      = require('gulp-postcss');
    var browserSync  = require('browser-sync');
    var plumber      = require('gulp-plumber');
    var rename       = require('gulp-rename');
    var concat       = require('gulp-concat');
    var del          = require('del');
    var runSequence  = require('run-sequence');
    // CSS
    var sass         = require('gulp-sass');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer'); // <- postcss
    var csswring     = require('csswring'); // <- postcss
    // JS
    var uglify       = require('gulp-uglify');
    var jshint       = require('gulp-jshint');
    // }}}


    //
    // DIRECTORIOS DEL PROYECTO
    // src = Source
    // dst = dstribution
    // Si renombramos las carpetas por alguna razón en este diccionario se pueden cambiar
    // rápidamente el nombre y todo sigue funcionando
    //

    var dirs = {
        src: 'src/',
        dst: 'dist/',
    };
    // }}}


    //
    // SASS => CSS
    // Sass con gulp-sass (libsass)
    // Esta es una de las tareas principales.
    // Creamos sourcemaps y css con los vendor-prefixes.
    // También se actualiza el navegador.
    //

    gulp.task('sass', function(){
        // Postcss
        var processors = [
            autoprefixer({browsers:['last 2 versions']}),
            //csswring
        ];

        return gulp.src(dirs.src + 'scss/*.scss')
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: "expanded"}).on('error', sass.logError))
            .pipe(postcss(processors))
            //.pipe(autoprefixer())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(dirs.src + 'css'))
            // Reloading the stream
            .pipe(browserSync.reload({
                stream: true
            }));
    });


    //
    // REFRESCO DEL NAVEGADOR
    // Refrescamos el navegador cuando existan cambios en archivos php, html, js y css.
    //

    gulp.task('browserSync', function() {
        browserSync({
            files: "*.php, *.html, *.js, *.css",
            server: {
                baseDir: dirs.src
            },
            // browser: 'safari'
            browser: 'google chrome',
            notify: false
        })
    });

    //
    // WATCH
    // Tarea para vigilar ciertos archivo y ejecutar las tareas convenientes.
    // Por ejemplo cuando se modifique un archivo scss/*.scssm, es decir cualquier
    // archivo sass, se lanza la tarea 'sass'
    //

    gulp.task('watch', ['browserSync'], function(){
        gulp.watch(dirs.src + 'scss/*.scss', ['sass']);
        gulp.watch(dirs.src + '*.html', browserSync.reload);
        gulp.watch(dirs.src + 'js/*.js', browserSync.reload);
        gulp.watch(dirs.src + 'js/**/*', browserSync.reload);
    });


    // TAREAS BUILD

    // BORRA EL DIRECTORIO dst
    // Para hacer un build limpio primero borramos todo el contenido del directorio dst.

    gulp.task('clean', function () {
      return del([ dirs.dst + '**/*'
      ]);
    });


    //
    // LINT TASK
    //

    gulp.task('lint', function() {
        return gulp.src(dirs.src + 'js/*.js')
            .pipe(plumber())
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });


    //
    // CONCATENATE & MINIFY JS
    //

    gulp.task('scripts', function() {
        return gulp.src([
                dirs.src + 'js/vendor/jquery-2.1.4.min.js',
                dirs.src + 'js/vendor/TweenMax.js',
                dirs.src + 'js/vendor/ScrollMagic.js',
                dirs.src + 'js/vendor/debug.addIndicators.js',
                dirs.src + 'js/vendor/animation.gsp.js',
                dirs.src + 'js/SAL/sal.js',
                dirs.src + 'js/SAL/plugins/sideIn.js',
                dirs.src + 'js/SAL/plugins/appearIn.js',
                dirs.src + 'js/SAL/sal-site-config.js',
            ])
            .pipe(plumber())
            .pipe(concat('all.js'))
            .pipe(gulp.dest(dirs.dst + '/js'))
            .pipe(rename('all.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest(dirs.dst + '/js'))
            .pipe(browserSync.reload({
                stream: true
            }));
    });


    //
    // TAREAS GULP
    //

    gulp.task('default', ['sass', 'watch']);
