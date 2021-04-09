import './App.css';
import styled from '@emotion/styled';
import Chat from './components/Chat';
import Logo from './components/Logo';
import Info from './components/Info';

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-auto-rows: minmax(1vh, auto);
`

const App = () => {
  return (
    <Wrapper>
      <Logo />
      <Chat />
      <Info />
    </Wrapper>    
  );
}

export default App;
