#!/usr/bin/env bash
# fail if any commands fails
set -e
# interrupt all running commands
trap "exit" INT
# debug log
# set -x

bundle check || bundle install

cd ios/
bundle exec pod check || bundle exec pod install || (rm -rf Pods/ && bundle exec pod install)
cd ..

yarn jetify
