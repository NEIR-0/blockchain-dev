// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract privateWallet {
   mapping(address => uint256) private balances;

    // Function to deposit Ether into the user's account
    function deposit() public payable {
        require(msg.value > 0, "Must deposit a positive amount of Ether");
        balances[msg.sender] += msg.value; // msg.value is in Wei
    }

    function withdrawAll() public {
        uint256 amount = balances[msg.sender];
        require(amount > 0, "Insufficient balance");
        balances[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }

    // Function to withdraw the user's own Ether
    function withdraw(uint256 amountInEther) public {
        // uint256 amountInWei = amountInEther * 1 ether; // Convert Ether to Wei
        require(balances[msg.sender] >= amountInEther, "Insufficient balance");
        balances[msg.sender] -= amountInEther;
        payable(msg.sender).transfer(amountInEther);
    }

    // Function to check the user's balance in Ether
    function checkBalance() public view returns (uint) {
        return balances[msg.sender];
    }
}