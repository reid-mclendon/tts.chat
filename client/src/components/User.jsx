import React from 'react'
import styled from '@emotion/styled';
import socket from '../adapters/socket';

const UserWrapper = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
`

const Username = styled.div`
display:flex;
justify-content: center;
align-items; center;
width: 100%;
font-family: 'Monosten';
`

const User = user => {
    return(
        <UserWrapper>
            <Username style={user.id === socket.id ? {borderBottom: '2px solid #04d410', paddingBottom: '3px'} : {borderBottom: 'none', paddingBottom: '3px'}}>{user.name}</Username>
        </UserWrapper>
    )
}

export default User;