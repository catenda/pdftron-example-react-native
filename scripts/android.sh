#!/usr/bin/env bash
# interrupt all running commands
trap "exit" INT
# debug log
# set -x

if command -v adb &> /dev/null; then
  echo "adb is available"
  numberOfConnectedDevices=$(adb devices | grep -o -w 'device' | wc -l)
  if [ $numberOfConnectedDevices -eq 0 ]; then
    echo "No connected devices, skipping uninstall"
  elif [ "$numberOfConnectedDevices" -eq 1 ]; then
    echo "Device is connected"
    isAppInstalled=$(adb shell pm list packages 2>/dev/null | grep no.catenda.bimsyncmobile)
    if [ -n "$isAppInstalled" ]; then
      echo "Removing existing build from device"
      adb uninstall no.catenda.bimsyncmobile
    else
      echo "App is not installed, skipping uninstall"
    fi
  elif [ "$numberOfConnectedDevices" -gt 1 ]; then
    echo "More than one device is connected, skipping uninstall"
  fi
fi

yarn react-native run-android "$@"
