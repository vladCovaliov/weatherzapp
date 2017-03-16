var gulp  = require('gulp')
var shell = require('gulp-shell')

gulp.task('deploy', shell.task([
  'webpack --progress --colors --config webpack.production.config.js',
  'git add .',
  'git commit -m "Release Bundle - bundle.js"',
  'sleep 2',
  'git push staging frontend:master',
  'heroku run rake db:migrate --remote staging',
  'heroku restart --remote staging',
  'sleep 2',
  'curl take-or-toss-staging.herokuapp.com'
]))