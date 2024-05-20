# WebNest

WebNest is a streamlined tool designed for web developers who are planning to transition to Flutter app development. It facilitates the quick setup of web development projects using DOM or Shadow DOM architectures and serves them with a local development server. This is the perfect starting point for developers looking to ease into Flutter by leveraging their web development skills.

## Features

- Easy project creation with a choice between 'dom' and 'shadow_dom' architectures.
- Automatically sets up project structure and files based on the chosen architecture.
- Convenient script for serving the project locally with a single command.

## Getting Started

1. Clone this repository or download the source code.

2. Navigate to the directory where WebNest is located.

3. Run the `setup.sh` script to install WebNest globally:
    ```bash
    sudo ./setup install
    ```

4. Create a new project:
    ```bash
    webnest create <project_name>
    ```

5. Follow the prompts to choose the architecture for your project ('dom' or 'shadow_dom').

6. Once the project is created, navigate into the project directory:
    ```bash
    cd <project_name>
    ```

7. Run the `webnest.sh` script to serve the project locally:
    ```bash
    webnest run
    ```

8. Your project should now be accessible at [http://localhost:8080](http://localhost:8080) in your web browser.

## Command Reference

- `sudo ./setup.sh install`: Installs WebNest globally.
- `webnest create <project_name>`: Creates a new project with the specified name.
- `webnest run`: Runs the project by starting the local development server.
- `./webnest.sh`: Serves the created project locally.
- `./webnest.sh -h`: Displays help information about using WebNest.

## Dependencies

- Node.js: WebNest relies on Node.js for package management and running the local development server.
- npm: The Node.js package manager is used to install and manage dependencies.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
