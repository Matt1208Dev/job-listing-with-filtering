import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filter",
    initialState: [],
    reducers: {
        addFilter: (state, action) => {
            // Si le state ne contient pas l'élément, on l'ajoute
            if (!state.find((el) => el === action.payload)) {
                state.push(action.payload);
            } else {
                return;
            }
        },
        removeFilter: (state, action) => {
            // On filtre le tag fourni du state
            state = state.filter((tag) => tag !== action.payload);
            return state;
        },
        clearFilters: (state, action) => {
            // On réinitialise le state
            state = [];
            return state;
        },
    },
});
