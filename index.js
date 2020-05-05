import Comment from './comment.js'
import reducer from './reducer.js'

function createStore(reducer) {

  let state;
  console.log("createStore called, state is, ", state)

  function dispatch(action) {
    console.log("dispatch called, before reducer call state is, state is, ", state)
    state = reducer(state, action);
    console.log("dispatch called, after reducer, state is, ", state)
    // render() is not really Redux, per se... [explain...]
    // an array of functions live here, which we might call subscribers.. and all the subscribers get called on state changes
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

function createComment(e) {
  e.preventDefault()
  const name = document.getElementById("new-comment-name-input").value
  const content = document.getElementById("new-comment-content-input").value
  Comment({name, content}).render()
}
const commentForm = document.getElementById("new-comment-form")
commentForm.addEventListener("submit", createComment)


button.addEventListener('click', () => {
  store.dispatch({ type: 'INCREASE_COUNT' });
});
