gulp = require "gulp"

gulp.task "copy", ->
  gulp.src "/bower_components/jquery/dist/**/*.min.js"
  .pipe gulp.dest "./dist/assets/lib/"