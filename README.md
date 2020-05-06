# Introduction to Redux

## Objectives:
* Understand the general concept of Redux. What is Redux and what does it do for us?
* Understand how state is managed through Redux and how the store works.
* Understand the problems that come with ever-chaning state in React.
* Understand why Redux is a solution to React state problems.

### Problems of React (or any complex client-side system)
* State is ever-changing and is constantly being mutated in React.
* Large React apps require props to be passed needlessly throughout the component tree.
* React apps with tons of stateful components are constantly re-rendering.

### The Solution: Redux
* What Is Redux?
  * The goal of Redux is to make state **global** and make all state changes **predictable**
  * Redux at its core is a state manager built for React.js
  * The main concept behind Redux is to store state in a central location and allow each component to access that state without having to send props down to child components or use callback functions to send data back up to the parent

* Why Redux?
  * As your React applications become increasingly more complex, State becomes increasingly harder to manage
  * An app with 20+ stateful components in its structure ignores the single source of truth principle and changes in state are difficult to track
  * Redux alleviates these issues by placing state in a single, central location that all of your components can interact with

### Single Source of Truth
* We use the Redux store to contain a singular and universal state within our application.
* Redux Store
  * The Redux store is a plain JS object that exposes a few Redux specific methods like `dispatch` and `getState`. Our applications state lives here
  * The store is created at the very beginning of an application with the `createStore` function

### Reading and Writing to the Store
* With Redux, the state of our application will actually never *change*. Instead, the `store` is alerted of changes and returns a new state based off of the previous state and incoming alterations.
* The state can be accessed by the method `getState`, a reader method
* The state can be manipulated by sending an "action" to a method called `dispatch`
  * An action is a plain object containing the instructions and information that describes the state changes we expect to see
  * Actions typically have two keys:
    * `type`: a string used to identify the type of state change
    * `payload`: any data needed to complete the state change

### Pure Functions: Reducers
* When we get an action telling us how the state should change, we use pure functions called reducers that do not mutate state but instead return an entirely new state to replace the old one
* Reducers
  * A reducer function's job is to read an action and return newly updated state
  * When a Redux store is created via `createStore`, the reducer is given as its first argument
  * A reducer function receives two arguments: the current state and an `action` object
  * The return value of the reducer function will become the new state
  * An easy way to remember the role of a reducer is that it takes two arguments and _reduces_ them to one thing, the new state

### Unidirectional Flow
* Manipulating the Redux store can be broken down to a series of unidirectional steps
  1. Component triggers an action
  2. Action sent to reducer
  3. Reducer returns the new state
  4. Change in store causes re-render in components that rely on the piece of state that changed

### Resources

Make sure you read through the Redux [docs], they are *awesome*!
And, check out the [source code], which is full of tremendously helpful explanations and links!!!
By the way, Redux is written in [TypeScript].  But you can translate any or all of it to JavaScript using [this tool] if you'd like to have a look through the source code.

[docs]:https://redux.js.org/
[source code]:https://github.com/reduxjs/redux
[TypeScript]:https://www.typescriptlang.org/
[this tool]:https://www.typescriptlang.org/play/index.html
