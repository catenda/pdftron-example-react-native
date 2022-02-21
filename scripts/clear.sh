#!/usr/bin/env bash
# fail if any commands fails
set -e
# interrupt all running commands
trap "exit" INT
# debug log
# set -x

watchman watch-del-all
rm -rf $TMPDIR/react-*
rm -rf node_modules/
