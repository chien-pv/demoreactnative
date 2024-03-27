import todoSlice from './todoSlice';
export function fetchDataTodo() {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        dispatch(todoSlice.actions.getAllData(json));
      });
  };
}
