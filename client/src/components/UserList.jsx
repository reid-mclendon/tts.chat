import React from 'react';
import User from './User';
import styled from '@emotion/styled';

const ListWrapper = styled.div`
    display:flex;
    justify-content: center;
`

const BoxWrapper = styled.div`
    width: 75%;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    grid-gap: 3em;

    @media (min-width: 768px) {
        width: 50%;
    }
    
    @media (min-width: 1024px) {
        width: 33%;
    }
`

const UserList = ({users}) => {
    
    return (
        <ListWrapper>
        <BoxWrapper>
            {users.map( user => <User key={user.id} name={user.name} id={user.id}/> )}
        </BoxWrapper>
        </ListWrapper>
    )
}

export default UserList;