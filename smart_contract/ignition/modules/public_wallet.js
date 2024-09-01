const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Public_Wallet", (m) => {
  const public_wallet = m.contract("publicWallet"); // name contract

  return { public_wallet };
});
