source "https://rubygems.org"

# Exclude problematic versions of activesupport that causes build failures.
gem 'activesupport', '>= 6.1.7.5', '!= 7.1.0'
# Pinned to 1.15.2 because cocoapods >= 1.16 requires xcodeproj >= 1.27,
# which is incompatible with the xcodeproj < 1.26 constraint from the
# React Native 0.81 template.
gem 'cocoapods', '= 1.15.2'
gem "cocoapods-check"
gem 'xcodeproj', '< 1.26.0'
gem 'concurrent-ruby', '< 1.3.4'

# Ruby 3.4.0 has removed some libraries from the standard library.
gem 'bigdecimal'
gem 'logger'
gem 'benchmark'
gem 'mutex_m'
