#!/bin/bash

# Function to install or update npm package if needed
function install_or_update_package() {
  local package_name=$1
  local package_version=$2

  if npm list -g "$package_name" | grep "empty"; then
    npm install -g "$package_name"
  else
    local installed_version
    installed_version=$(npm list -g --depth 0 "$package_name" | grep "$package_name@" | sed "s/.*@//")
    if [[ "$installed_version" != "$package_version" ]]; then
      npm install -g "$package_name"
    fi
  fi
}

# Install or update http-server
install_or_update_package "http-server" "latest"

# Add npm global package directory to PATH
export PATH="$PATH:$(npm prefix -g)/bin"

# Serve the project using http-server
http-server -o -c-1
