import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import socket from '../adapters/socket';

const Wrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 25vh;
grid-row: 2;
`

const StyledInput = styled.input`
border-radius: 100em;
box-sizing: border-box;
font-family: 'Monosten';
color: #b7b7b7;
background-color: #f2f3f5;
border: none;
width: 75%;
padding: 1em 2em 1em 2em;
outline: none;
transition-duration: .3s;
&:focus {
    color: #303030;
}

&:hover:not(:focus) {
    background-color: #eeeff2;
    color: #a5a5a5;
}
@media (min-width: 768px) {
   width: 50%;
}

@media (min-width: 1024px) {
   width: 33%;
}   
`

const Chat = () => {
    // Set defaultText and initial state
    let user;
    const defaultText = 'Enter your name to join';
    const [userName, setName] = useState('');
    const [inputText, setInputText] = useState(defaultText);
    const [charLimit, setCharLimit] = useState(8);
    
    // On submit: 
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.blur();
        if (userName === '') { // If we don't have a userName, 
            user = {id: socket.id, name: inputText}
            socket.emit('newUser', user);
            setName(inputText);
            setCharLimit(32);
            setInputText('');
        }

        else {
            socket.emit('msg', inputText); 
            setInputText('');
        }
    }

    useEffect(() => {
        socket.on('speak', text => {
                let utterance = new SpeechSynthesisUtterance(text);
                let synth = window.speechSynthesis;
                synth.speak(utterance);
          });

          return (() => {
              socket.off('speak');
          })
    });


    return (
    <>
    <Wrapper>
    <form style={{ width:'100%', display:'flex', justifyContent:'center' }} onSubmit={handleSubmit}>
        <StyledInput maxLength={charLimit} autoComplete="off"  type="text" name="name" onFocus={(e) => setInputText('')}
         onBlur={(e) => { userName === '' ? setInputText(defaultText) : setInputText('Say something...'); }}
          value={inputText} onChange={(e) => setInputText(e.target.value)}>
        </StyledInput>
    </form>
    </Wrapper> 
    </>
    )
}

export default Chat;