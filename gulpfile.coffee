require "coffee-script/register"
gulp = require "gulp"
reqDir = require "require-dir"

reqDir "./build"

gulp.task "default", ["clean", "compile", "copy", "serve", "watch"]
