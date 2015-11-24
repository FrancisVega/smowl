

    ////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                        //
    //  Secuoyas Gulp File - Secuoyas (c) 2015                                                //
    //                                                                                        //
    ////////////////////////////////////////////////////////////////////////////////////////////


    'use strict';

    //
    // GULP PLUGINS
    //

    // Gulp itself
    var gulp         = require('gulp');
    // General
    var doc          = require('gulp-documentation');
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
      return del([ dirs.dst + '**/*' ]);
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
    // CONCATENATE sal, greensock & scrollmagic
    //

    gulp.task('minimize', function() {
    console.log("MINIMIZE");
        return gulp.src([
                dirs.src + 'js/sal.js',
                dirs.src + 'js/plugins/appearIn.js',
                dirs.src + 'js/plugins/landIn.js',
                dirs.src + 'js/plugins/heroParallax.js',
                dirs.src + 'js/plugins/modParallax.js',
            ])
            .pipe(plumber())
            .pipe(concat('sal-0.21.js'))
            .pipe(gulp.dest(dirs.src + '/min'))
            .pipe(rename('sal-0.21.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest(dirs.src + '/min'))
    });


    //
    // CONCATENATE sal, greensock & scrollmagic
    //

    gulp.task('minimize-bundle', function() {
    console.log("MINIMIZE-BUNDLE");
        return gulp.src([
                dirs.src + 'js/vendor/ScrollMagic.js',
                dirs.src + 'js/vendor/TweenMax.js',
                dirs.src + 'js/vendor/animation.gsp.js',
                dirs.src + 'js/sal.js',
                dirs.src + 'js/plugins/appearIn.js',
                dirs.src + 'js/plugins/landIn.js',
                dirs.src + 'js/plugins/heroParallax.js',
                dirs.src + 'js/plugins/modParallax.js',
            ])
            .pipe(plumber())
            .pipe(concat('sal-0.21-bundle.js'))
            .pipe(gulp.dest(dirs.src + '/min'))
            .pipe(rename('sal-0.21-bundle.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest(dirs.src + '/min'))
    });


    //
    // Doc
    //

    gulp.task('doc', function() {
        return gulp.src([ dirs.src + 'js/sal.js' ])
            .pipe(doc({ format: 'html' }))
            .pipe(gulp.dest('html-documentation'));
    });


    //
    // Delete concats sal javascript files
    //
    gulp.task('cleanSalJs', function () {
    console.log("DELETE");
      return del([ dirs.src + 'min/sal-0.21-bundle.js', dirs.src + "min/sal-0.21.js" ]);
    });

    //
    // TAREAS GULP
    //

    gulp.task('default', ['sass', 'watch', 'doc']);
    gulp.task('min', function(callback) {
        runSequence(
            ['minimize', 'minimize-bundle' ],
            'cleanSalJs',
        callback);
    });
