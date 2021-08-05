import { PersonsAction, PersonsActionTypes } from "../../types/persons";

const personsInitialState:any = {
    data: []
};

export const personsReducer = (state = personsInitialState, action: PersonsAction) => {
    switch (action.type) {
        case PersonsActionTypes.FETCH_PERSONS:
            return {state};
        case PersonsActionTypes.FETCH_PERSONS_SUCCESS:
            return {...state, data: [...state.data, action.payload]};
        case PersonsActionTypes.FETCH_PERSONS_ERROR:
            return {...state, data: [...state.data, action.payload]};
        case PersonsActionTypes.CLEAR_PERSONS:
            return {data: []};
        default:
            return state
    }
};
