import axios from "axios";
import { ADDNEW_TODO, DELETE_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO } from "./Constants";

const API_URL = "http://localhost:4000";

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos`);
    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};
export const ToggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos/${id}`);
    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTodo = (id , data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/todos/${id}` , {data});
    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/todos/${id}`);
    dispatch({ type: DELETE_TODO, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};
