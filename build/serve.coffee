gulp = require "gulp"
gutil = require "gulp-util"
express = require "express"
path = require "path"

app = express()

gulp.task "serve", ->
  app.use express.static path.resolve "./vendor/bower_components"
  app.use express.static path.resolve "./"
  app.listen 5454
  gutil.log "Listening on port: 5454"
