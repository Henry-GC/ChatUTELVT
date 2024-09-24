import { ChakraProvider, Box } from '@chakra-ui/react';
import './App.css';
import Main from './components/main';
import SideBar from './components/sidebar';

function App() {
  return (
    <ChakraProvider>
      <Box
          className='app-container'
          display='flex'
      >
        <SideBar/>
        <Main/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
