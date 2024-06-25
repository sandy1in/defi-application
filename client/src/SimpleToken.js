// client/src/SimpleToken.js // To interact with the smart contract

import web3 from './web3';
import SimpleToken from './contracts/SimpleToken.json';

const instance = new web3.eth.Contract(
  SimpleToken.abi,
  'deployed_contract_address_here'
);

export default instance;
