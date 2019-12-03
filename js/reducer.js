// add code snippets from README

createStore = reducer => {
  let state;
  dispatch = action => {
    state = reducer(state, action);
    render();
  };
  getState = () => {
    return state;
  };
  return { dispatch, getState };
};
changeCount = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };
    case "DECREASE_COUNT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

render = () => {
  let container = document.getElementById("container");
  container.textContent = store.getState().count;
};

let button = document.getElementById("button");
button.addEventListener("click", () => {
  store.dispatch({ type: "INCREASE_COUNT" });
});

let store = createStore(changeCount);
store.dispatch({ type: "hocus-pocus" });
