source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.3'

gem 'rails', '~> 6.0.1'
gem 'puma', '~> 4.1'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 4.0'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.7'
gem 'bootsnap', '>= 1.4.2', require: false
gem 'bootstrap-sass'
gem 'bcrypt'
gem 'jquery-rails'
gem 'materialize-sass'
gem 'material_icons'
gem 'carrierwave'

group :development, :test do
  gem 'sqlite3', '~> 1.4'
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'webdrivers'
  gem 'rails-controller-testing'
  gem "minitest"
  gem "minitest-rails"
  gem "minitest-rails-capybara" # capybaraで結合テストできるようにする

  # レポートの書式を変更する
  gem "minitest-reporters" # テスト結果をゲージ表示
  #gem "minitest-doc_reporter" # テスト結果を単体ごとに羅列

  # 機能追加系
  gem "minitest-stub_any_instance" # メソッドmockを追加できる様にする

  #gem "minitest-bang" # let!文のサポートを追加

  gem "factory_girl" # DBのデータのモックを作成
  gem 'minitest-reporters'
  gem 'guard'
  gem 'guard-minitest'
end

group :production do
  gem 'pg', '1.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
