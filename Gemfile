source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end




# default gems
gem 'rails', '~> 5.1.7'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
# gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'

#--------------     CUSTOM ADDED GEMS  --------------------#

# materialize framework
gem 'materialize-sass', '~> 1.0.0'
gem 'material_icons'


# External API sources
gem 'stock_quote', '~> 3.0'

#React
gem 'webpacker'
gem 'react-rails'

#User profile management
gem 'devise', '~> 4.7', '>= 4.7.1'

#postgresql db for Heroku
group :production do
  gem 'pg', '~> 0.18.4'
end
#-----------------------------------------------------------#


group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
end


group :development do
  gem 'sqlite3' , '< 1.4'
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]