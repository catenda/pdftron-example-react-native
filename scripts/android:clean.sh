#!/usr/bin/env bash
# fail if any commands fails
set -e
# interrupt all running commands
trap "exit" INT
# debug log
# set -x

cd android
./gradlew clean
cd ..
