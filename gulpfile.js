
  ////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                            //
  //  Secuoyas MOtion Wrapper Library - Secuoyas (c) 2015                                       //
  //                                                                                            //
  ////////////////////////////////////////////////////////////////////////////////////////////////


  'use strict';

  // Gulp itself
  var gulp         = require('gulp');
  // General
  var argv         = require('yargs').argv;
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


  //
  // DIRECTORIOS DEL PROYECTO
  // src = Source
  // dst = dstribution
  // Si renombramos las carpetas por alguna razón en este diccionario se pueden cambiar
  // rápidamente el nombre y todo sigue funcionando
  //

  var dirs = {
    src: 'smowl/uncompressed/',
    min: 'smowl/minified/',
    demo: 'examples/',
    dst: 'dist/',
    tests: 'test/',
    doc: 'docs/'
  };

  var version = argv.version;

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

    return gulp.src(dirs.demo + 'scss/*.scss')
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: "expanded"}).on('error', sass.logError))
      .pipe(postcss(processors))
      //.pipe(autoprefixer())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(dirs.demo + 'css'))
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
        baseDir: "",
        //baseDir: dirs.tests
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
    gulp.watch(dirs.demo + 'scss/*.scss', ['sass']);
    gulp.watch(dirs.src + '**/*.js', ['doc']);
    gulp.watch(dirs.demo + '*.html', browserSync.reload);
    gulp.watch(dirs.tests + '**/*.js', browserSync.reload);
    gulp.watch(dirs.tests + '**/*.html', browserSync.reload);
    gulp.watch(dirs.src + '**/*.js', browserSync.reload);
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
    return gulp.src(dirs.src + 'lib/**/*')
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
        dirs.src + 'smowl.js',
        dirs.src + 'plugins/appearIn.js',
        dirs.src + 'plugins/landIn.js',
        dirs.src + 'plugins/heroParallax.js',
        dirs.src + 'plugins/modParallax.js',
        dirs.src + 'plugins/spriteAnim.js',
        ])
        .pipe(plumber())
        .pipe(concat('smowl-'+version+'.js'))
        .pipe(gulp.dest(dirs.min))
        .pipe(rename('smowl-'+version+'.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dirs.min))
        });


  //
  // CONCATENATE smowl, greensock & scrollmagic
  //

  gulp.task('minimize-bundle', function() {
      console.log("MINIMIZE-BUNDLE");
      return gulp.src([
          dirs.src + 'vendor/ScrollMagic.js',
          dirs.src + 'vendor/TweenMax.js',
          dirs.src + 'vendor/animation.gsp.js',
          dirs.src + 'vendor/debug.addIndicators.js',
          dirs.src + 'smowl.js',
          dirs.src + 'plugins/spriteAnim.js',
          dirs.src + 'plugins/heroParallax.js',
          dirs.src + 'plugins/modParallax.js',
          dirs.src + 'plugins/fadeIn.js',
          dirs.src + 'plugins/fadeOut.js'])
      .pipe(plumber())
      .pipe(concat('smowl-'+version+'-bundle.js'))
      .pipe(gulp.dest(dirs.min))
      .pipe(rename('smowl-'+version+'-bundle.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(dirs.min))
      console.log(dirs.min);
  });


  //
  // Doc
  //

  gulp.task('doc', function() {
      //return gulp.src([ dirs.src + 'lib/sal.js', dirs.src + 'lib/plugins/heroParallax.js', dirs.src + 'lib/plugins/modParallax.js', dirs.src + 'lib/plugins/landIn.js' , dirs.src + 'lib/plugins/appearIn.js'])
      /*
       *return gulp.src([ dirs.src + 'smowl.js', dirs.src+'plugins/fadeIn.js'])
       *.pipe(doc({ format: 'html' }))
       *.pipe(gulp.dest( dirs.doc ));
       */
  });


  //
  // Delete concats sal javascript files
  //
  gulp.task('cleanSalJs', function () {
      console.log("DELETE");
      return del([ dirs.min + 'smowl-'+version+'-bundle.js', dirs.min + 'smowl-'+version+'.js' ]);
  });

  //
  // TAREAS GULP
  //

  gulp.task('default', ['sass', 'watch', 'doc']);
  gulp.task('min', function(callback) {
    runSequence(
        ['minimize', 'minimize-bundle'],
        'cleanSalJs',
        callback);
  });
