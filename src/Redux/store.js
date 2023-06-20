import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./FilterSlice";

export const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
    },
});
