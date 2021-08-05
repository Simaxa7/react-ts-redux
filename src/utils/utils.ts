import {MAX_PERSONS} from "../store/action/actionConstants";

export const randomPerson = () => {
    return Math.floor(Math.random()*MAX_PERSONS);
};
