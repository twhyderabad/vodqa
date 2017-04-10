gulp = require "gulp"

gulp.task "backup:dist", ->
  gulp.src ["./dist/**"]
  .pipe gulp.dest "./july2016/dist/"

gulp.task "backup:src", ->
  gulp.src ["./src/**"]
  .pipe gulp.dest "./july2016/src/"

gulp.task "backup:index.html", ->
  gulp.src ["./index.html"]
  .pipe gulp.dest "./july2016/"


gulp.task "backup", ["backup:dist", "backup:src","backup:index.html"]
