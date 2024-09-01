// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract publicWallet {
    uint public totalBalance;

    function deposit() public payable {
        totalBalance += msg.value;
    }
    
    function showBalanceInAddress() public view returns (uint) {
        return address(this).balance;
    }

    function withdrawAll() public {
        require(totalBalance > 0, "Insufficient balance in the wallet");
        address payable  walletUser = payable(msg.sender);
        walletUser.transfer(showBalanceInAddress());
    }

    function withdrawAmount(uint _amountInEther) public {
        require(_amountInEther <= totalBalance, "Insufficient balance in the wallet");
        address payable walletUser = payable(msg.sender);
        walletUser.transfer(_amountInEther);
        totalBalance -= _amountInEther;
    }
}