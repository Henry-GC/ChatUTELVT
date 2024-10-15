import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Landing from './components/Landing';
import { BrowserRouter } from 'react-router-dom';
import { HistoryProvider } from './components/Context/historyContext';

function App() {

  return (
    <BrowserRouter>
      <ChakraProvider>
        <HistoryProvider>
          <Landing/>
        </HistoryProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
