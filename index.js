import Comment from './comment.js'
import reducer from './reducer.js'

function createStore(reducer) {

  let state;
  console.log("createStore called, state is, ", state)

  function dispatch(action) {
    console.log("dispatch called, before reducer call state is, state is, ", state)
    state = reducer(state, action);
    console.log("dispatch called, after reducer, state is, ", state)
    // render() is not really Redux -- what Redux does is collects an array of functions that rely on the Redux state and calls them when changes are made.  Redux calls these functions 'subscribers'.
    render();
  }

  function getState() {
    console.log("getState called, state is, ", state)
    return state;
  };

  return {
    dispatch,
    getState
  };
};


function render() {
  let container = document.getElementById('count-container');
  container.textContent = store.getState().count;
};

let store = createStore(reducer) // createStore takes the reducer reducer as an argument
store.dispatch({ type: '@@INIT' });
let button = document.getElementById('button');

button.addEventListener('click', () => {
  store.dispatch({ type: 'INCREASE_COUNT' });
});

// Exercises:
// 1.  Add upvotes and downvotes to the Redux store, and hook up the corresponding buttons.

// 2.  Change this code so that we're adding comments to the Redux store.
// You can choose to use the Comment function or just steal its render method and tweak it to work here, or just build your own code for it entirely.
// You'll have to change the default state to add comments to the initial state.
// Then, you'll have to update the reducer to handle "ADD_COMMENT".
// Finally, hook the submit listener up and dispatch an action.

// 3. Now, re-organize the code a bit:
//   - add a store.js file that creates the store
//   - keep any listeners and DOM manipulation here in index.js
//   - you'll have to import the store here to use it... can you make it work?

function createComment(e) {
  e.preventDefault()
  const name = document.getElementById("new-comment-name-input").value
  const content = document.getElementById("new-comment-content-input").value
  Comment({name, content}).render()
}
const commentForm = document.getElementById("new-comment-form")
commentForm.addEventListener("submit", createComment)
