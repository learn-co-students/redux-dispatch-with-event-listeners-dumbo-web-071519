// add code snippets from README
let state;

reducer = (state = { count: 0 }, action) => {
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
  container.textContent = state.count;
};
dispatch = action => {
  state = reducer(state, action);
  render();
};

let button = document.getElementById("button");
button.addEventListener("click", () => {
  dispatch({ type: "INCREASE_COUNT" });
});

dispatch({ type: "hocus-pocus" });
