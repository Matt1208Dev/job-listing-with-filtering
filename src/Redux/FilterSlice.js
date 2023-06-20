import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filter",
    // initialState: ["HTML", "CSS", "JS"],
    initialState: [],
    reducers: {
        addFilter: (state, action) => {
            if (!state.find((el) => el === action.payload)) {
                state.push(action.payload);
            } else {
                return;
            }
        },
        removeFilter: (state, action) => {
            state = state.filter((tag) => tag !== action.payload);
            console.log(
                state,
                action,
                state.filter((tag) => tag !== action.payload)
            );
            return state;
        },
        clearFilters: (state, action) => {
            state = [];
            return state;
        },
    },
});
