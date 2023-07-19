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
