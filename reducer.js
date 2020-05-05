function reducer(state = { count: 0 }, action) {
  console.log("reducer, before state change, state is, state is, ", state)

  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
}

export default reducer
