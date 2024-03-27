import {createStore} from 'redux';

// {
//     type: "ADD",
//     palyload: {}
// }

function reducer(state = {count: 0}, action) {
  switch (action.type) {
    case 'addcount':
      state.count = state.count + 1;
      return {...state};
    case 'subcount':
      state.count = state.count - 1;
      return {...state};
    default:
      return state;
  }
}
let store = createStore(reducer);

let data = store.getState();
console.log(data);
store.dispatch({
  type: 'subcount',
});

data = store.getState();
console.log(data);
