import {Dispatch} from "redux";
import axios from "axios";
import {PersonsActionTypes} from "../../types/persons";
import {imgBaseUrl, maxPersons, personBaseUrl} from "./actionConstants";

function randomPerson(){
    return Math.floor(Math.random()*maxPersons);
}

export const fetchPersons = () => {
    return async (dispatch:Dispatch) => {
        const idForImg = randomPerson();
        try {

            const response = await axios.get(`${personBaseUrl}${idForImg}/`);
            console.log('response data', response.data);

            dispatch ({
                type: PersonsActionTypes.FETCH_PERSONS_SUCCESS,
                payload: {
                    ...response.data,
                    idForImg,
                    imgUrl: `${imgBaseUrl}${idForImg}.jpg`,
                    statusType: 'success',
                }
            });
        } catch (e) {
            dispatch({
                type: PersonsActionTypes.FETCH_PERSONS_ERROR,
                payload: {
                    statusType: 'error',
                    statusErrorDescription:`Ошибка загрузки данных для персонажа под номером ${idForImg}`,
                    idForImg: idForImg,
                }
            })
        }
    }
};
