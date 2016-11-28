# Week 12a - Intro to React
* Front-end UI Frameworks and Libraries

We can apply Model View Controller (MVC) to User Interface design. See: 
[Slides(3) Graphic]()

Data-Binding is a problem between the Model and View. The View needs to be a true representation of the Model.

Many of the UI frameworks are based on MV only

Contents of Framework:
* M - Data Models
* V - View Templates
* C* - Events
* Routing - Single Page App

**There are many types of UI frameworks. Here are some examples:** 
[Libraries Link]()

## React - Facebook Framework
React is component-based. [Example]()

### Components
A useful way to organize information flow. See this [chart]() for an example. Everything needs to get a piece of information from an component lower in the hierarchy.

### 1-way data-binding
In this situation, data is passed from Parent to Children, so it goes from Higher to Lower in the Hierarchy. This can be one way or the other in different frameworks.

This helps with data-flow, and makes code very easy to read. React goes from Higher to Lower

**REACT** is just the VIEW in MVC
* it is UI-only
* can be used with Flux, Redux for the model, but that's not always necessary

We will be focussing on passing data from *parent to children*.

### React CDN:
Website: [React.js](https://facebook.github.io/react/) & [Installation](https://facebook.github.io/react/docs/installation.html)

### React Components
To create a component class, we use

**React.createClass()**

See public/javascript/testscript.js

React can also use [JSX](http://jsx.github.io/) to write HTML tags in our React components, and we then use [BABEL](http://babeljs.io/ ) to convert JSX to Javascript.

In this lecture we're using a WebPack

This will run our JSX through bable and spit out regular javascript.

* NPM installation
    * npm install --save react react-dom
    * npm install --save-dev webpack babel-loader babel-preset-react babel-core babel-preset-es2015
    
(Side Note: We no longer need the CDN of react once the package is installed)

**See [slides]() for setup.** src/index.js, then webpack config

