import { createSlice } from "@reduxjs/toolkit";
import { TasksData } from "../../data/database";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: { value: TasksData },
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload);
    },

    deleteTask: (state, action) => {
      state.value = state.value.filter((task) => task.id !== action.payload.id);
    },

    updateTask: (state, action) => {
      state.value.map((task) => {
        if (task.id === action.payload.id) {
          task.taskName = action.payload.taskName;
        }
      });
    },
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
