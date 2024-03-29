# react-burning-ritual

Submit & Let go

> A burning ritual is a ceremony that involves releasing the past. It is often performed on holidays like New Year's Eve. The goal is to let go of negativity, suffering, or pain, and focus on the present. 

> [!TIP]
> demo: https://entitycs.github.io/react-burning-ritual/

> [!IMPORTANT]
> [accessibility]
> 
> If adding custom controller (input) elements, strive to enable all of the following, at minimum:
 > - [x] mouse
 > - [x] touch
 > - [x] keyboard

![Burning Ritual UX - Pipe Filter Controller drawio](https://github.com/entitycs/react-burning-ritual/assets/5684374/8b2a2866-d408-4fe3-8c39-cd028f0c0ac8)

# Features

## Pipe & Filter Architecture

Filters can use the state of the item in the pipe, and/or the state of a set of one or more controllers to control the mutators to be applied to the submitted value

## Grid

Just wanted something on the end of the pipe other than a div element.  Dragged elements retain dragged position in grid; grid contents + positions are reset upon changes to the grid size.

## Knob

A digital knob component, using a novel css trick, and no trig/pi values - can you identify the trick?

## GridSizeControl

Another custom input component; attempts to use advanced styling over 2 native html slider elements - not necessarily the most friendly control, but natively accessible.

## Controller Accessibility

All controls are touch, mouse, and keyboard accessible. 

# Getting Started with Create React App
<details>

<summary>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).</summary>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

</details>
