// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract simpleWallet {
    uint public toalBalance;

    function deposit() public payable {
        toalBalance+=msg.value;
    }

    function showBalanceInAddress() public view returns (uint)  {
        return address(this).balance;
    }

    function withdrawAll() public {
        address payable walletUser = payable(msg.sender);
        walletUser.transfer(toalBalance);
    }
}