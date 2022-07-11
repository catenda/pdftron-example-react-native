#!/usr/bin/env bash
# interrupt all running commands
trap "exit" INT
# debug log
# set -x

if command -v adb &> /dev/null; then
  echo "adb is available"
  numberOfConnectedDevices=$(adb devices | grep -o -w 'device' | wc -l)
  devices=$(adb devices | grep -v devices | grep device | cut -f 1)
  for device in $devices
  do
    isAppInstalled=$(adb -s $device shell pm list packages 2>/dev/null | grep com.pdftronexample)
    if [ -n "$isAppInstalled" ]; then
      echo "Removing existing build from $device"
      adb -s $device uninstall com.pdftronexample
    else
      echo "App is not installed on $device, skipping uninstall"
    fi
  done
fi

yarn react-native run-android --active-arch-only "$@"
