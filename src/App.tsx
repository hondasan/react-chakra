import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
      <p>変更してみた</p>
    </ChakraProvider>
  );
}

export default App;
