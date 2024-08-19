const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("simple_wallet_tittle", (m) => {
  const simple_wallet = m.contract("simpleWallet"); // name contract

  return { simple_wallet };
});
