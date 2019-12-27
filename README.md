# inventoryflo-ui
The web client for the InventoryFlo system.

## Development
This section describes the knowledge and tools needed to start making contributions to this project.

### Prerequisites
- Node 12+
- npm 6+

### Relevant Project Structure
```
.
|-- src/ (The source code for the app)
    |--index.js (Entry point for the app)
    |--actions/ components/ reducers/ selectors/ (#Ref1)
    |--containers/ (#Ref2)
    |--services/ (Functionality modules that aren't related to the redux pattern)
|-- public/ (Static assets for the app)
|-- node_modules/ (Dependencies of the app, managed by npm)
|-- build/ (Built version of the app, is gitignored)
|-- yarn.lock, package.json, package-lock.json (dependency management files)

```
[#Ref1](https://jaysoo.ca/2016/02/28/applying-code-organization-rules-to-concrete-redux-code/)

[#Ref2](https://medium.com/@yassimortensen/container-vs-presentational-components-in-react-8eea956e1cea)

### Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

`npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Deployment
This section describes the knowledge and tools needed to deploy the UI

### Prerequisites
- GNU Make
- AWS CLI
- [AWS Credentials configured locally](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html#cli-quick-configuration)

### Make Targets
- **clean**: removes the build folder
- **build-[qa/prod]**: 1. *clean* 2. compiles and builds the code
- **deploy-[qa/prod]**: 1. *build* 2. deploys the code to qa or prod s3 bucket

## Infrastructure
- Information about the architecture of the InventoryFlo System can be found here: https://github.com/herbal-goodness/inventoryflo-infra
- For getting access to the AWS account, contact Unoma Okorafor or Julius Phu
- Specific details about the resources used by the UI can be found in the Makefile