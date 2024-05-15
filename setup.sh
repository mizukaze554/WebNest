#!/bin/bash

# Function to display a message
function echo_message() {
  echo ""
  echo "======================================"
  echo "$1"
  echo "======================================"
  echo ""
}

# Function to create an HTML file based on user choice
function create_html_file() {
  read -p "Enter your choice (dom or shadow_dom): " userChoice

  case $userChoice in
    "dom")
      echo_message "Creating HTML file with 'Hi dom'..."
      echo "<!DOCTYPE html>
<html>
<head>
  <title>Hi dom</title>
</head>
<body>
  <h1>Hi dom</h1>
</body>
</html>" > hi.html
      echo_message "hi_dom.html created successfully!"
      ;;
    "shadow_dom")
      echo_message "Creating HTML file with 'Hi shadow_dom'..."
      echo "<!DOCTYPE html>
<html>
<head>
  <title>Hi shadow_dom</title>
</head>
<body>
  <h1>Hi shadow_dom</h1>
</body>
</html>" > hi.html
      echo_message "hi_shadow_dom.html created successfully!"
      ;;
    *)
      echo_message "Invalid choice. Please choose either 'dom' or 'shadow_dom'."
      exit 1
      ;;
  esac
}

# Check for 'create' argument
if [[ "$1" == "create" ]]; then
  echo_message "Welcome to WebNest ..."
  create_html_file
  exit 0
fi

# Check for 'create' argument
if [[ "$1" == "-h" ]]; then
  echo "Welcome to WebNest ..."
  echo "./setup.sh create        To create Projects"
  echo "./setup.sh route         To view Projects Routes"
  exit 0
fi