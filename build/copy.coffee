gulp = require "gulp"

gulp.task "copy", ->
  gulp.src "./src/**/*.jpg"
  .pipe gulp.dest "./dist/"