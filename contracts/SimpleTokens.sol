// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Import the ERC20 contract from OpenZeppelin's library

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Define the SimpleToken contract, which inherits from the ERC20 contract

contract SimpleToken is ERC20 {
    // Constructor function that initializes the contract with an initial supply of tokens
    // The initial supply is minted to the address that deploys the contract
    constructor(uint256 initialSupply) ERC20("SimpleToken", "SIM") {
        _mint(msg.sender, initialSupply);
    }
}