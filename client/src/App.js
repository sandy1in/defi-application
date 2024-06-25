import logo from './logo.svg';
import './App.css';
// client/src/App.js
import React, { useState, useEffect } from 'react';
import web3 from './web3';
import SimpleToken from './SimpleToken';

function App() {
  const [balance, setBalance] = useState('');
  const [account, setAccount] = useState('');

  useEffect(() => {
    const loadBlockchainData = async () => {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      const balance = await SimpleToken.methods.balanceOf(accounts[0]).call();
      setBalance(balance);
    };

    loadBlockchainData();
  }, []);

  return (
    <div className="App">
      <h1>SimpleToken Balance</h1>
      <p>Your account: {account}</p>
      <p>Your balance: {balance}</p>
    </div>
  );
}

export default App;