# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Currency Exchange Rate Converter

## Overview

This is a **Currency Exchange Rate Converter** built with **React** and **TypeScript**. The app allows users to view live exchange rates for different currencies and convert one currency into another. It fetches the latest exchange rates from an external API and allows users to input an amount to see how much it is in another currency.

## Technical Description

### How to build and run the app

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/currency-converter.git
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the app in development mode:
    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:3000` to view the app.

5. To build the app for production:
    ```bash
    npm run build
    ```

### App Architecture and Design Choices

- **Component-based architecture**: The app uses a modular, component-based architecture, where each part of the UI is broken down into smaller, reusable components.
  
- **React + TypeScript**: TypeScript is used for static type checking to ensure code quality and reduce potential bugs. React is used for building the user interface.

- **State management**: The app does not use any complex state management library. Instead, React's built-in `useState` and `useEffect` hooks are used to manage state and side effects.

- **Responsive design**: The app is responsive, adapting to both desktop and mobile screen sizes.

### Description of App Structure and Major Components

The app is organized in the following structure:


**Major Components:**

- **CurrencyCard**: Displays a single currency's information, including its name, flag, and exchange rate.
- **CurrencyConverter**: Allows users to convert an amount from one currency to another.
- **AmountInput**: Manages user input for the amount to be converted.

### Any Additional Features or Libraries Used

- **Axios**: Used to fetch live exchange rates from an external API.
- **React Router**: Used for routing between different pages or views in the app.
- **SCSS**: Used for styling the app, with custom SCSS for modular, maintainable styles.
- **TypeScript**: Provides type safety and better development experience with autocompletion and error checking.

## Additional Considerations

- **Code readability and maintainability**: The code is written with a focus on clarity and maintainability. Functions and components are modular, which makes it easy to extend or modify the app.

- **Testing**: Consider adding unit tests for components, especially for components like `CurrencyCard`, `CurrencyConverter`, and any utilities in the `shared` directory. Use a testing library like Jest or React Testing Library for writing tests.

- **Version Control (git)**: Git is used to track all changes during the development process. The project follows a Git workflow where new features are developed in separate branches and merged into the main branch after review.

## How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


**Major Components:**

- **CurrencyCard**: Displays a single currency's information, including its name, flag, and exchange rate.
- **CurrencyConverter**: Allows users to convert an amount from one currency to another.
- **AmountInput**: Manages user input for the amount to be converted.

### Any Additional Features or Libraries Used

- **Axios**: Used to fetch live exchange rates from an external API.
- **React Router**: Used for routing between different pages or views in the app.
- **SCSS**: Used for styling the app, with custom SCSS for modular, maintainable styles.
- **TypeScript**: Provides type safety and better development experience with autocompletion and error checking.

## Additional Considerations

- **Code readability and maintainability**: The code is written with a focus on clarity and maintainability. Functions and components are modular, which makes it easy to extend or modify the app.

- **Testing**: Consider adding unit tests for components, especially for components like `CurrencyCard`, `CurrencyConverter`, and any utilities in the `shared` directory. Use a testing library like Jest or React Testing Library for writing tests.

- **Version Control (git)**: Git is used to track all changes during the development process. The project follows a Git workflow where new features are developed in separate branches and merged into the main branch after review.

## How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
