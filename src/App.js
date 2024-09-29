import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Landing from './components/Landing';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Landing/>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
