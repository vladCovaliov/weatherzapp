source 'https://rubygems.org'
ruby '2.3.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.0', '>= 5.0.0.1'

# Use pg as the database for Active Record
gem 'pg'

# Use Puma as the app server
gem 'puma', '~> 3.0'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use jquery as the JavaScript library
gem 'jquery-rails'

# HTTP Requests Gem
gem 'httparty'

# Use HAML instead of HTML
gem 'haml'

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

group :production, :staging do
  gem 'rails_12factor'
  gem 'heroku-deflater'
end

group :development, :test do
  gem 'pry'
  gem 'letter_opener'
  gem 'simplecov'
  gem 'dotenv-rails'
end

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'rspec-rails', '~> 3.5'
  gem 'rspec-its'
  gem 'factory_girl_rails'
  gem 'faker'
  gem 'capybara'
  gem 'shoulda-matchers'
end

group :development do
  # gem 'web-console'
  gem 'listen', '~> 3.0.5'
end

group :assets do
  gem 'yui-compressor', '~> 0.12.0'
end