import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
display:flex;
justify-content: center;
align-items: flex-end;  
grid-row: 1;
height: 25vh;
font-family: 'Josefin Sans';
`
const StyledSpan = styled.span`
font-family: 'Josefin Sans';
font-size: 10vh;
color: #6f6f6f;
font-weight: 100;
transition-duration: .3s;
&:hover {
    color: #04d410;
}
`
const Logo = () => {

    return (
        <Wrapper><StyledSpan>tts.chat</StyledSpan></Wrapper>
    )
}

export default Logo;