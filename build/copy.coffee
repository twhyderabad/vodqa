gulp = require "gulp"

gulp.task "copy", ->
  gulp.src ["./src/assets/images/**/*.jpg", "./src/assets/images/**/*.png"]
  .pipe gulp.dest "./dist/assets/images/"
