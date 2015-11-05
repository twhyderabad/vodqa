gulp = require "gulp"

gulp.task "backup:dist", ->
  gulp.src ["./dist/**"]
  .pipe gulp.dest "./aug2015/dist/"

gulp.task "backup:src", ->
  gulp.src ["./src/**"]
  .pipe gulp.dest "./aug2015/src/"

gulp.task "backup:index.html", ->
  gulp.src ["./index.html"]
  .pipe gulp.dest "./aug2015/"


gulp.task "backup", ["backup:dist", "backup:src","backup:index.html"]
