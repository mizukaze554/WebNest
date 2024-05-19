#!/bin/bash

CONFIG_FILE="/etc/webnest_config"

# Function to display a message
function echo_message() {
  echo ""
  echo "======================================"
  echo "$1"
  echo "======================================"
  echo ""
}

# Function to create a project based on user choice
function create_project() {
  local project_name=$1

  # Read base path from config file
  if [[ -f "$CONFIG_FILE" ]]; then
    local base_path
    base_path=$(cat "$CONFIG_FILE")
  else
    echo_message "Config file not found. Please run 'webnest install' first."
    exit 1
  fi

  read -p "Enter your choice (dom or shadow_dom): " userChoice

  case $userChoice in
    "dom")
      echo_message "Creating project '$project_name' with 'dom'..."
      mkdir -p "$project_name"
      cp -r "$base_path/domSrc/"* "$project_name"
      create_webnest_script "$project_name"
      echo_message "'$project_name' project created successfully!"
      ;;
    "shadow_dom")
      echo_message "Creating project '$project_name' with 'shadow_dom'..."
      mkdir -p "$project_name"
      cp -r "$base_path/shadowDomSrc/"* "$project_name"
      create_webnest_script "$project_name"
      echo_message "'$project_name' project created successfully!"
      ;;
    *)
      echo_message "Invalid choice. Please choose either 'dom' or 'shadow_dom'."
      exit 1
      ;;
  esac
}

# Function to create webnest.sh script in the project directory
function create_webnest_script() {
  local project_name=$1
  cat <<EOL > "$project_name/webnest.sh"
#!/bin/bash

# Function to install or update npm package if needed
function install_or_update_package() {
  local package_name=\$1
  local package_version=\$2

  if npm list -g "\$package_name" | grep "empty"; then
    npm install -g "\$package_name"
  else
    local installed_version
    installed_version=\$(npm list -g --depth 0 "\$package_name" | grep "\$package_name@" | sed "s/.*@//")
    if [[ "\$installed_version" != "\$package_version" ]]; then
      npm install -g "\$package_name"
    fi
  fi
}

# Install or update http-server
install_or_update_package "http-server" "latest"

# Add npm global package directory to PATH
export PATH="\$PATH:\$(npm prefix -g)/bin"

# Serve the project using http-server
http-server -o -c-1
EOL

  chmod +x "$project_name/webnest.sh"
}

# Function to install the script globally and save the base path
function install_script() {
  local script_path="/usr/local/bin/webnest"
  local base_path="$(dirname "$(realpath "$0")")"

  if [[ $EUID -ne 0 ]]; then
    echo_message "Please run the install command as root or with sudo."
    exit 1
  fi

  cp "$0" "$script_path"
  chmod +x "$script_path"
  echo "$base_path" > "$CONFIG_FILE"
  echo_message "WebNest installed successfully! Use 'webnest create <project_name>' to create a new project."
}

# Function to run the project
function run_script() {
  local base_path=$(pwd)
  if [[ -f "$base_path/webnest.sh" ]]; then
    echo_message "Running the project..."
    bash "$base_path/webnest.sh"
  else
    echo_message "webnest.sh script not found in the current directory."
    exit 1
  fi
}

# Main script logic
if [[ "$1" == "create" && -n "$2" ]]; then
  echo_message "Welcome to WebNest ..."
  create_project "$2"
  exit 0
elif [[ "$1" == "install" ]]; then
  install_script
  exit 0
elif [[ "$1" == "run" ]]; then
  run_script
  exit 0
elif [[ "$1" == "-h" ]]; then
  echo "Welcome to WebNest ..."
  echo "./webnest.sh install                To install WebNest globally"
  echo "webnest create <project_name>       To create Projects"
  exit 0
fi

echo "Invalid argument. Use -h for help."
