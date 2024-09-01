const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Private_Wallet", (m) => {
  const private_wallet = m.contract("privateWallet"); // name contract

  return { private_wallet };
});
