require "coffeescript/register"
gulp = require "gulp"
reqDir = require "require-dir"

reqDir "./build"

#gulp.task "default", ["compile", "copy", "backup","serve", "watch"]

gulp.task "default", gulp.series ["compile", "copy","serve", "watch"]
