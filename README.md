# WebNest

WebNest is a simple tool for quickly setting up web development projects with ease. It provides a streamlined way to create projects based on different web frameworks or architectures, such as DOM or Shadow DOM, and serves them using a local development server.

## Features

- Easy project creation with a choice between 'dom' and 'shadow_dom' architectures.
- Automatically sets up project structure and files based on the chosen architecture.
- Convenient script for serving the project locally with a single command.

## Getting Started

1. Clone this repository or download the source code.

2. Navigate to the directory where WebNest is located.

3. Run the `setup.sh` script to create a new project:
    ```
    ./setup.sh create <project_name>
    ```

4. Follow the prompts to choose the architecture for your project ('dom' or 'shadow_dom').

5. Once the project is created, navigate into the project directory:
    ```
    cd <project_name>
    ```

6. Run the `webnest.sh` script to serve the project locally:
    ```
    ./webnest.sh
    ```

7. Your project should now be accessible at http://localhost:8080 in your web browser.

## Command Reference

- `./setup.sh create <project_name>`: Creates a new project with the specified name.
- `./setup.sh -h`: Displays help information about using WebNest.

## Dependencies

- Node.js: WebNest relies on Node.js for package management and running the local development server.
- npm: The Node.js package manager is used to install and manage dependencies.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
