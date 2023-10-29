# DiscoverWeb Assessment App

The DiscoverWeb Assessment App is mobile and web application developed using React Native, React Native Paper, Expo, and TypeScript. 
It includes login screens and tabs for give information about teachers and institutions.  

## Prerequisites

Before running the application, ensure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (version 14)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) (for mobile testing)
- [React Native](https://reactnative.dev/docs/environment-setup) (if not already installed)

## Branching Strategy

The development of the DiscoverWeb Assessment App end up with having 2 branches:

react-native-components Branch: Initially, the project was developed using basic React Native components. The code was pushed into this branch.
master Branch: After the decision to switch to React Native Paper, all components were refactored to use React Native Paper for a consistent and polished UI experience. The refactored code is in the master branch.

## Installation

To get started with the DiscoverWeb Assessment App, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/aidinb/assessmentApp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd assessmentAppp
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

To run the application on different platforms, use the following commands:

- To start the development server for the web:

  ```bash
  npm run web
  ```

- To run the app on an Android emulator or device:

  ```bash
  npm run android
  ```

- To run the app on an iOS emulator or device:

  ```bash
  npm run ios
  ```

## Navigation

For seamless navigation within the app, we use [React Navigation](https://reactnavigation.org/). React Navigation is a powerful and customizable navigation library for React Native and React-based web applications. It provides a smooth and intuitive way to navigate between different screens and tabs in the application.

## Project Structure

The project is structured as follows:

- `src/`
    - `assets/` - Contains images.
    - `components/` - Reusable UI components used throughout the app.
    - `hooks/` - Custom React hooks for managing state and logic.
    - `routes/` - Navigation configuration and routing setup.
    - `screens/` - Individual screens of the application.
    - `theme/` - Theming and styling configurations for the app.
    - `utils/` - Utility functions and helper modules.

## Testing

Testing is not required for this project, i usually use jest for unit testing 
and Detox or Maestro for integration testing
- To run unit tests:


## Linting

This project follows the default linting rules for TypeScript and React Native. You can run linting checks to ensure your code adheres to these standards:

```bash
npm run lint
```

## Contributing

We welcome contributions from the community. If you'd like to contribute to the DiscoverWeb Assessment App, please follow our https://www.discoverweb.co.in.

## License

This project belong to DiscoverWeb https://www.discoverweb.co.in.

## Contact

For any questions, issues, or feedback, please feel free to [contact us](mailto:aidin.b2009@gmail.com.com).

---
