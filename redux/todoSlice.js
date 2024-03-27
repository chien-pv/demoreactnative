import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchListTodos = createAsyncThunk(
  'todos/fetchListTodos',
  // Declare the type your function argument here:
  async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    // Inferred return type: Promise<MyData>
    console.log('RESPONSE:', response);
    return await response.json();
  },
);

const initialState = {
  values: [],
  error: '',
  isLoading: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      state.values.splice(action.payload, 1);
    },
    getAllData: (state, action) => {
      state.values = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchListTodos.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(fetchListTodos.fulfilled, (state, action) => {
      console.log(state.values);
      state.isLoading = false;
      state.values = [...action.payload];
    });
    builder.addCase(fetchListTodos.rejected, (state, action) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error;
      }
    });
  },
});

export default todoSlice;
