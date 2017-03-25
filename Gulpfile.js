var gulp  = require('gulp')
var shell = require('gulp-shell')

gulp.task('deploy', shell.task([
  'webpack --progress --colors --config webpack.production.config.js',
  'git add .',
  'git commit -m "Release Bundle - bundle.js"',
  'sleep 2',
  'git push staging develop:master',
  'heroku run rake db:migrate',
  'heroku restart',
  'sleep 2',
  'curl weatherzapp.herokuapp.com'
]))