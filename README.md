## SMART CONTRACT (FRONTEND)
In this project, we have to make a smart contract of two-three functions and make a frontend for displaying these functions. We also have to connect the front end of this project to the Metamask wallet.
## Description

After cloning the GitHub I run the commands for running the local host at http://127.0.0.1:8545/ and we get accounts and their respective private keys. Then I made a html file for making the project's front end. In this HTML file, I have made three buttons for depositing, withdrawing, and printing the balance. Then I made a javascript file in which I defined the functioning of these three buttons. Then I deployed this javascript file into the HTML file. Then I created a smart contract for these functions and connected it to the front end of the application.
Then I have right click on the VS code and click on the Live server which is an extension in VS Code. Then connecting to meta mask through connected sites.


## Getting Started
After cloning the GitHub repository at https://github.com/MetacrafterChris/SCM-Starter.
Inside the project directory, in the terminal type: npm i
Open two additional terminals in your VS code
In the second terminal type: npx hardhat node
From there we got accounts and their respective private keys which we can use to run at local host.
### Executing program

1. Run the HTML file by right click on VS Code.
2. Click on Open with Live server.
3. Then it will open at http://127.0.0.1:5500/first.html.
4. Run the smart contract on Remix IDE and put the contract address in the javascript file.
5. Then connect the site to the metamask wallet.

Smart Contract Solidity Code
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Bank {
    mapping(address => uint256) public balances;

    function depositBalance(uint256 amount) public payable {
        require(amount > 0, "Deposit amount must be greater than zero");
        balances[msg.sender] += amount;
    }

    function withdrawBalance(uint256 amount) public payable{
        require(amount > 0, "Withdrawal amount must be greater than zero");
        require(amount <= balances[msg.sender], "Insufficient balance");
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }

    function printBalance() public view returns (uint256) {
        return balances[msg.sender];
    }
}

Now to compile the above code click on the "Solidity Compiler" tab in the left-hand sidebar. The compiler option should use the version that is written in the contract. and then click on the "Compile smart.sol" button. After this to deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar. and then click on deploy button to deploy the contract smart.sol. 




## Authors
JATIN SAINI

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
