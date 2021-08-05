import { combineReducers } from "redux";
import { personsReducer } from "./personsReducer";

export const rootReducer = combineReducers({
    persons: personsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
