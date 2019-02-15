# Welcome to Tip Tracks 360 - View the Deployed App [here](https://tips-app-client.herokuapp.com/)
### This app is great for people in the service industry who earn any part of their income as tips. It will help you keep track of your tips, group your pay into different time periods and provide analytics that give you full insight into your earnings

### Landing Page
![screen shot 2019-02-14 at 1 56 52 pm](https://user-images.githubusercontent.com/34561773/52879107-638cba80-312c-11e9-97ba-2b67887b8a58.png)
  - This is what the user will see when they first visit my app - if they have an account they can jump straight to login, otherwise, the link to signup will bring them to the registration form.
### Registration Form
![screen shot 2019-02-14 at 2 15 53 pm](https://user-images.githubusercontent.com/34561773/52879311-cda55f80-312c-11e9-9a70-30ffe1cfc352.png) 
   - Registration form with some styled validations

### User Onboard
![screen shot 2019-02-14 at 2 16 42 pm](https://user-images.githubusercontent.com/34561773/52879371-fa597700-312c-11e9-9051-adc474f2976e.png)
  - This is my attempt at a user onboarding experience. When a user signs up for the first time, they will be greeted with this page. The user cannot add any tips to their collection, and therefore view them, with out a job first. Once they have entered a job, They will be brought to the dashboard page

### Dashboard
![screen shot 2019-02-14 at 2 12 56 pm](https://user-images.githubusercontent.com/34561773/52879475-3391e700-312d-11e9-99d9-6d99bf79e118.png)

### Add tips form
![screen shot 2019-02-14 at 2 13 40 pm](https://user-images.githubusercontent.com/34561773/52879493-42789980-312d-11e9-9ae7-a0b6a2e0ef2c.png)
  - This form will allow users to add tips to their collection. Once they add a tip they will be able to view it on the stats page. The more tips the user has, the more effective the weekly and monthly views are.

### Stats Page
#### daily view
![screen shot 2019-02-14 at 2 14 38 pm](https://user-images.githubusercontent.com/34561773/52879516-56240000-312d-11e9-99d1-0f0917a4ea74.png)
#### weekly view
![screen shot 2019-02-14 at 2 14 58 pm](https://user-images.githubusercontent.com/34561773/52879549-6fc54780-312d-11e9-8cdc-480c9084da43.png)
#### monthly view
![screen shot 2019-02-14 at 2 15 04 pm](https://user-images.githubusercontent.com/34561773/52879614-91beca00-312d-11e9-98d2-9cdcc7f773d6.png)
#### are you sure you want to delete "modal"
![screen shot 2019-02-14 at 2 17 20 pm](https://user-images.githubusercontent.com/34561773/52879635-a1d6a980-312d-11e9-9588-b474b9068bee.png)

## Technology Stack
This is a React project that was bootstrapped with Create React App. It also uses Redux for state management. In addition I am utilizing Redx-Form, which helps easily connect my forms into the redux ecosystem and React Router to give my single page app a multi-page feel.

### Component Heirarchy
 The components in my app are organized something like this 
   App
    HeaderBar - This present no matter where you are in the app
    Switch(React Router Component)
      Landing Page
        Links to Registration Page and Login Page
      RegistrationPage
        If successful register, will Redirect to Dashboard showing AddJobForm
      Login Page
        If successful login, will Redirect to Dashboard
      Dashboard
        options to go to AddTipsForm or StatsPage
      StatsPage
        Cards - These can be toggled to be a daily, weekly or monthly view

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
