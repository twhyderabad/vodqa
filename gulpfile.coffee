require "coffee-script/register"
gulp = require "gulp"
reqDir = require "require-dir"

reqDir "./build"

gulp.task "default", ["compile", "copy", "serve", "watch"]
