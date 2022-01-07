import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Button, useColorMode } from "@chakra-ui/react";

function App() {
  const { toggleColorMode } = useColorMode();
  //Wallet connect function
  const connectWallet = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + chakra-Ui!</p>
        <Box my={5}>
          <Button bg="blue.300" onClick={toggleColorMode}>
            Color Mode
          </Button>
        </Box>

        <Box>
          <Button borderRadius="full" bgColor="#61DAFB" onClick={connectWallet}>
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </Button>
        </Box>
        <p>
          Edit <code>Template</code> and save you time.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
