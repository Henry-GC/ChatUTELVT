import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Landing from './components/Landing';

function App() {
  return (
    <ChakraProvider>
      <Landing/>
    </ChakraProvider>
  );
}

export default App;
