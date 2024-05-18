#!/bin/bash

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
  
  read -p "Enter your choice (dom or shadow_dom): " userChoice

  case $userChoice in
    "dom")
      echo_message "Creating project '$project_name' with 'dom'..."
      mkdir -p "$project_name"
      cp -r "domSrc/"* "$project_name"
      create_webnest_script "$project_name"
      echo_message "'$project_name' project created successfully!"
      ;;
    "shadow_dom")
      echo_message "Creating project '$project_name' with 'shadow_dom'..."
      mkdir -p "$project_name"
      cp -r "shadowDomSrc/"* "$project_name"
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

# Main script logic
if [[ "$1" == "create" && -n "$2" ]]; then
  echo_message "Welcome to WebNest ..."
  create_project "$2"
  exit 0
fi


if [[ "$1" == "-h" ]]; then
  echo "Welcome to WebNest ..."
  echo "./setup.sh create <project_name>  To create Projects"
  exit 0
fi

echo "Invalid argument. Use -h for help."
