#Create React app

1) npm install create-react-app -g

2) create-react-app <name-of-the-app>

3) React.createElement takes in loads of params but at least 3 :

React.createElement(<element>,<class_names>,<content>)

4) Writing javascript inside a functional component can be done with the help of {} (flower braces)
    return <h1>I'm a person and am {Math.random() * 30}  years old</h1>

5) Pass data between functional components with the help of props which is passed as argument to that component.

6) Content in between the calling component is accessed with the hlep of props.children.

7) Adding multiple lines of code to return inside a functional component would require wrapping them inside 
brackets "()" and then wrapping them inside a root component.

8) state in class based component allows user to save the data and change it later. Component will be re-rendered 
based on the change of state.

9) State and props are the two things that will be listened for any re-render on the page.

10) Each iterable item in the component should be given an id. That id should be the index of map function.

11) Use this.setState() function to modify the state of the component.

12) state cannot be used in functional components , but to use them in functional components , use {setState} "Hooks"

How to use Hooks : 

13) useState({<initial values>}) inside the functional component.

14) Destructure it  and then have a function to be called to change the state.

15) useState hook will replace the state entirely in functional component whereas setState in class component will only replace the modified parts. Solution will need to be verified
as its not clear.

16) Stateful/container/smart and stateless components  : Better to have more stateless than stateful components so that you know where you need to make changes.

17) You can pass function as argument to children components and call the function in child. 
But if you want to pass data into the function, there are a couple of ways of doing it :


1) onClick = {clickHandle.bind(this,"Karthik")}
                    (or)
2) onClick = {() => clickHandle("Karthik)}

Use 1) instead of 2) as it returns a function that calls the function instead of binding it.


Why we need Redux :

Drilling of props from parent to grand children for use in grand children. Not efficient.




#Redux configuration

1) Add provider component  in index.js and wrap it around the application (parent of everything in our application). 

2) Pass the store to the provider as a param.

3) Create a root reducer that combines all the reducers that we're gonna create.

4) Create a user reducer that takes in two params => state and action. 
    Assign initial state if required and then action will contain the payload.
    return the state and the current User.

    5) Create a store where you need to import createStore and applyMiddleware. 
    ApplyMiddleware will take in middlewares which is an array of loggers.
    createStore will take in root reducer and the applyMiddleware


    6) Header component requires current User. So use mapStateToProps to retrieve the value from the store.

    7) App.js needs to update the current user after login. So use mapDispatchToProps to update the store.


    LOCAL STORAGE

    8) Install redux-persist.

    9) Import persistStore and pass existing store as parameter to persistStore. (store.js)

    10) Import persistReducer from redux-persist and storage.

    Wrap the rootReducer by passing it as a second param for persistReducer and export it.
    First param would be a config hat contains three things :
    1) key -> store from where
    2) type of storage used -> storage
    3) all the reducers required to be stored.

    11) Index.js -> Wrap the App component with PersistGate and pass the persistor created in store.js

  // "scripts": {
  //   "start": "react-scripts start",
  //   "build": "react-scripts build",
  //   "test": "react-scripts test",
  //   "eject": "react-scripts eject"
  // },










This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
