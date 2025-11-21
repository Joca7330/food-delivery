# Project Overview

This is a frontend for a food delivery application. It is built with React and Vite. It uses `react-router-dom` for routing and React Context for state management. The application displays a menu of food items, allows users to add items to a cart, and proceed to an order page. The data for the food items and menu categories is currently hardcoded in `src/assets/assets.js`.

# Building and Running

To get the project up and running, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server, and you can view the application in your browser at the address provided.

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This will create a `dist` folder with the production-ready files.

4.  **Lint the code:**
    ```bash
    npm run lint
    ```
    This will run the ESLint to check for any linting errors.

# Development Conventions

*   **Component Structure:** Components are organized into folders within the `src/components` directory. Each component has its own folder containing the JSX file and a corresponding CSS file for styling.
*   **Styling:** The project uses CSS for styling. Each component has its own CSS file, which is imported into the component's JSX file.
*   **State Management:** The application uses React Context for global state management. The main context is defined in `src/context/Context.jsx` and provides the food list and shopping cart functionality.
*   **Routing:** The application uses `react-router-dom` for client-side routing. The routes are defined in `src/App.jsx`.
*   **Data:** The application's data is currently hardcoded in `src/assets/assets.js`. This includes the list of food items and menu categories.
