gulp = require "gulp"
jade = require "gulp-jade"
sass = require "gulp-sass"
coffee = require "gulp-coffee"

livereload  = require "gulp-livereload"
tinylr = require "tiny-lr"

server = tinylr()

gulp.task "compile:html", ->
  gulp.src "src/index.jade"
    .pipe jade { pretty: true }
    .pipe gulp.dest "./dist"
    .pipe livereload server

gulp.task "compile:elements", ->
  gulp.src "src/**/*.jade"
  .pipe jade { pretty: true }
  .pipe gulp.dest "./dist"
  .pipe livereload server

gulp.task "compile:css", ->
  gulp.src("src/**/*.sass")
    .pipe sass { errLogToConsole: true }
    .pipe gulp.dest "./dist/"
    .pipe livereload server

gulp.task "compile:js", ->
  gulp.src("src/**/*.coffee")
    .pipe coffee {bare: true}
    .pipe gulp.dest "./dist/"
    .pipe livereload server

gulp.task "watch", ->
  server.listen 35729, (err) ->
    if err then return console.log err

    gulp.watch "src/index.jade", ["compile:html"]
    gulp.watch "src/**/*.sass", ["compile:css"]
    gulp.watch "src/**/*.coffee", ["compile:js"]
    gulp.watch "src/**/*.jade", ["compile:elements"]

gulp.task "compile", ["compile:html", "compile:css", "compile:js","compile:elements"]
