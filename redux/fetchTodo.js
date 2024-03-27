import {createAsyncThunk} from '@reduxjs/toolkit';

const fetchListTodo = createAsyncThunk(
  'todos/fetchAll',
  // Declare the type your function argument here:
  async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    // Inferred return type: Promise<MyData>
    return await response.json();
  },
);

export default fetchListTodo;
