import React from "react";
import styled from "styled-components";
import { useTypedSelector } from "../hooks/useTypedSelector";

const StyledListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
`;

const StyledImageItem = styled.img`
    border: 2px solid #ccc;
    height: 280px;
    width: 200px;
    border: 1px solid red;
    margin: 4px;
`;

const StyledErrorItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    height: 280px;
    width: 200px;
    margin: 4px;
    text-align: center;
`;

const UserList = () => {
    const personsList = useTypedSelector(state => state.persons.data);

    return (
         <StyledListContainer>
             { personsList.map((elem:any, i:number) => (
                 elem?.statusType === "error")
                 ? <StyledErrorItem key={i}>{elem?.statusErrorDescription}</StyledErrorItem>
                 : <StyledImageItem key={i} src={elem?.imgUrl}/>
             )}
         </StyledListContainer>
    )
};

UserList.displayName = "UserList";

export default UserList;
