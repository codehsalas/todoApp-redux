import { createSlice } from "@reduxjs/toolkit";
import { tasksList } from "../../data/database";

const taskSlice = createSlice({
    task: "tasks",
    initialState: tasksList,
    reducers: {
        
    }
})

export default taskSlice.reducer;