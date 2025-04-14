import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const apiUrl  = import.meta.env.VITE_API_URL 
const initialState = {
  todos: [],
  todo: null,
  loading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk('todo/fetchTodos',async()=>{
    const response = await axios.get(apiUrl);
    // console.log(response.data)
    return response.data
})
export const fetchSingleTodo = createAsyncThunk('todo/fetchSingleTodo',async(id)=>{
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data
})

export const addTodo = createAsyncThunk('todo/addTodo',async(todo)=>{
    const response = await axios.post(apiUrl,todo);
    return response.data
})
export const updateTodo = createAsyncThunk('todo/updateTodo',async({id, todo})=>{
    const response = await axios.put(`${apiUrl}/${id}`,todo);
    return response.data
})

export const deleteTodo = createAsyncThunk('todo/deleteTodo',async(id)=>{
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data
})


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
          //fetch
          .addCase(fetchTodos.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload;
          })          
          .addCase(fetchTodos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })

          //single fetch
          .addCase(fetchSingleTodo.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchSingleTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.todo = action.payload;
          })          
          .addCase(fetchSingleTodo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })

          //add
          .addCase(addTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.todos.push(action.payload);
          })

          //delete
          .addCase(deleteTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
          })        
    }
})

export const selectTodos = (state) => state.todo.todos;
export const selectLoading = (state) => state.todo.loading;
export const selectError = (state) => state.todo.error;

export const selectTodo = (state) => state.todo.todo;

export default todoSlice.reducer;