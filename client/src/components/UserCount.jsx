import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
`
const Inner = styled.div`
display:flex;
align-items: center;
width: 75%;
font-family: 'Monosten';
font-weight: 300;
margin-bottom: 2em;
@media (min-width: 768px) {
    width: 50%;
}

@media (min-width: 1024px) {
    width: 33%;
}
`

const Dot = styled.div`
width: .5em;
height: .5em;
background: #04d410;
border-radius: 100em;
margin-right: 1em;
`

const UserCount = ({users}) => {
    
    return (
        <Wrapper><Inner><Dot/>{users.length} Online</Inner></Wrapper>
    );
}

export default UserCount;

