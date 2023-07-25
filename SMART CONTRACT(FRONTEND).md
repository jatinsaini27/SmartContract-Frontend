SMART CONTRACT (FRONTEND)
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

HTML Code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SMART CONTRACT</title>
    <script src="https://cdn.jsdelivr.net/npm/web3@1.5.3/dist/web3.min.js"></script>
    <script type = "module" src = "working.js"></script>
</head>
<body>
    <h1><center>TRANSACTION APPLICATION</center></h1>
    <h2>DEPOSITING THE BALANCE</h2>
    <div>
        <button onclick = "depositBalance()">
            DEPOSIT HERE
        </button>
    </div>
    <h2>WITHDRAWING THE BALANCE</h2>
    <div>
        <button onclick="withdrawBalance()">
            WITHDRAW HERE
        </button>
    </div>
    <h2>PRINTING THE BALANCE</h2>
    <div>
        <button onclick = "printBalance()" > 
            PRINT HERE
        </button>
    </div>
    <script>

        const ethereumAddress = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";

        // Deposit function
        function deposit() {
            const amount = 60; 
            depositBalance(amount);
        }

        // Withdraw function
        function withdraw() {
            const amount = 10; 
            withdrawBalance(amount);
        }

        // Print function
        function print() {
            printBalance();
        }
    </script>


</body>
</html>

Javascript Code
import Web3 from "web3";
window.addEventListener('load', async () => {
    if (window.ethereum) {     // for interacting with the metamask
        window.web3 = new Web3(ethereum);
    }
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    }
    else {
        console.log('No web3 provider detected');
    }
  });

  const web3 = new Web3("http://127.0.0.1:5500/first.html");
  
  const contractAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
  const  contractABI = [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "depositBalance",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "withdrawBalance",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "printBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

    async function depositBalance(amount) {
        
          await Bank.methods.depositBalance(amount).send({ from: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BCn }); 
          console.log("Deposit successful");

      }    



async function withdrawBalance(amount) {
  
    await Bank.methods.withdrawBalance(amount).send({ from: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BCn }); 
    console.log("Withdrawal successful");
}

async function printBalance() {
  
    const balance = await Bank.methods.printBalance().call({ from: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BCn }); 
    console.log("Account balance:", balance);
 
}





## Authors

Metacrafter Chris
@metacraftersio

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
