import { Dispatch } from "redux";
import axios from "axios";
import { PersonsActionTypes } from "../types/persons";
import { randomPerson } from "../utils/utils";
import { IMAGE_BASE_URL, PERSONS_BASE_URL } from "../store/action/actionConstants";

export const fetchPersons = () => async (dispatch:Dispatch) => {
    const idForImg = randomPerson();
    try {
        const response = await axios.get(`${PERSONS_BASE_URL}${idForImg}/`);
        console.log('response data', response.data);

        dispatch ({
            type: PersonsActionTypes.FETCH_PERSONS_SUCCESS,
            payload: {
                ...response.data,
                idForImg,
                imgUrl: `${IMAGE_BASE_URL}${idForImg}.jpg`,
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
};
