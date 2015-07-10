gulp = require "gulp"

gulp.task "copy:images", ->
  gulp.src ["./src/assets/images/**/*.jpg", "./src/assets/images/**/*.png"]
  .pipe gulp.dest "./dist/assets/images/"

gulp.task "copy:lib", ->
  gulp.src ["./src/assets/lib/**/*.*"]
  .pipe gulp.dest "./dist/assets/lib/"

gulp.task "copy:js", ->
  gulp.src ["./src/assets/js/**/*.*"]
  .pipe gulp.dest "./dist/assets/js/"


gulp.task "copy", ["copy:images", "copy:lib", "copy:js"]
