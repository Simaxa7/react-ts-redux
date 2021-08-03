import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {fetchPersons} from "../store/action-creators/persons";
import {PersonsActionTypes} from "../types/persons";

function MyInput(){
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();

    const handleFetchPersons = () => {
        dispatch({type: PersonsActionTypes.CLEAR_PERSONS});
        if (value > 0) {
            for (let i=1; i<=value; i++ ) {
                dispatch(fetchPersons())
            }
        }
    };

    if(value < 0) setValue(0);

    return (
        <div>
            <p> Сколько запросов на рандомных персонажев сделать? </p>
            <input type="number" value={value} onChange={(e)=>setValue(Number(e.target.value))}/>
            <button onClick={()=>handleFetchPersons()}>Отобразить</button>
        </div>
    )
}

export default MyInput;