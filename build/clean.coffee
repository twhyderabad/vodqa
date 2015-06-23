gulp = require "gulp"
rmrf = require "rimraf"

gulp.task "clean", (cb) -> rmrf "dist", rmrf.bind {}, ".tmp", cb
