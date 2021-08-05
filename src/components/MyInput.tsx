import React, {useCallback, useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { fetchPersons } from "../API/persons";
import { PersonsActionTypes } from "../types/persons";

const MyInput = () => {
    const [value, setValue] = useState<number>(0);
    const dispatch = useDispatch();

    const handleFetchPersons = useCallback(() => {
        dispatch({type: PersonsActionTypes.CLEAR_PERSONS});
        if (value > 0) {
            for (let i=1; i<=value; i++ ) {
                dispatch(fetchPersons())
            }
        }
    },[value]);

    useEffect(() => {
        if (value < 0) setValue(0);
    }, [value]);

    return (
        <>
            <p> Сколько запросов на рандомных персонажев сделать? </p>
            <input type="number" value={value} onChange={({target})=>setValue(Number(target.value))}/>
            <button onClick={handleFetchPersons}>Отобразить</button>
        </>
    )
};

MyInput.displayName = "MyInput";

export default MyInput;
