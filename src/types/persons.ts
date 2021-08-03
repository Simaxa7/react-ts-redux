export enum PersonsActionTypes {
    FETCH_PERSONS ='FETCH_PERSONS',
    FETCH_PERSONS_SUCCESS ='FETCH_PERSONS_SUCCESS',
    FETCH_PERSONS_ERROR ='FETCH_PERSONS_ERROR',
    CLEAR_PERSONS ='CLEAR_PERSONS'
}

interface FetchPersonsAction {
    type: PersonsActionTypes.FETCH_PERSONS;
}

interface FetchPersonsSuccessAction {
    type: PersonsActionTypes.FETCH_PERSONS_SUCCESS;
    payload: any[];
}

interface FetchPersonsErrorAction {
    type: PersonsActionTypes.FETCH_PERSONS_ERROR;
    payload: string;
}

interface ClearPersons {
    type: PersonsActionTypes.CLEAR_PERSONS;
}

export type PersonsAction = FetchPersonsAction | FetchPersonsSuccessAction | FetchPersonsErrorAction | ClearPersons;
