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
        
          await Bank.methods.depositBalance(amount).send({ from: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BCn }); // Replace with the sender's Ethereum address
          console.log("Deposit successful");

      }    



async function withdrawBalance(amount) {
  
    await Bank.methods.withdrawBalance(amount).send({ from: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BCn }); // Replace with the sender's Ethereum address
    console.log("Withdrawal successful");
}

async function printBalance() {
  
    const balance = await Bank.methods.printBalance().call({ from: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BCn }); // Replace with the caller's Ethereum address
    console.log("Account balance:", balance);
 
}





