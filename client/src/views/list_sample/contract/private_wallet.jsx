import { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "../../../../ABI/private_wallet.js";

function PrivateWallet() {
  const [contract, setContract] = useState({});
  const [balance, setBalance] = useState(undefined);
  const [provide, setProvide] = useState({});
  const [nominal, setNominal] = useState("");
  const [withdrawNominal, setWithdrawNominal] = useState("");

  useEffect(() => {
    connectEther();
  }, []);

  const connectEther = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        await ethereum.request({ method: "eth_requestAccounts" });
        const prov = new ethers.providers.Web3Provider(window.ethereum);
        const sig = await prov.getSigner();
        setProvide(sig);
        // console.log(sig, ">>>>>>>>>>>");

        const contractAddress = import.meta.env
          .VITE_ADDRESS_CONTRACT_PRIVATE_WALLET;
        // console.log(abi, "????");

        const smartContract = new ethers.Contract(contractAddress, abi, prov); // connect ke contractnya
        // console.log(smartContract, "??????????????????????");
        setContract(smartContract);
      } else {
        console.log("Ethereum wallet is not connected. !!!!!");
      }
    } catch (error) {
      console.log(error, "!!!!!!!!!!!!!!!!!");
    }
  };

  const deposit = async () => {
    if (!nominal) {
      alert("please input nominal");
      return;
    } else if (nominal == "0") {
      alert("nominal must be greater than 0");
      return;
    }
    const tx = await contract.connect(provide);
    // console.log(tx, ">>>>>>>");
    const response = await tx.deposit({
      value: ethers.utils.parseEther(nominal),
    });
    // console.log(response, "????");
    setNominal("");
  };

  const withdrawAll = async () => {
    const tx = await contract.connect(provide);
    // console.log(tx, ">>>>>>>");
    const response = await tx.withdrawAll();
    // console.log(response, "????");
    setNominal("");
    setWithdrawNominal("");
  };

  const withdraw = async () => {
    // console.log(withdrawNominal, ">>>>>>>>>>>>");
    const tx = await contract.connect(provide);
    const response = await tx.withdraw(
      ethers.utils.parseEther(withdrawNominal)
    );
    console.log(response);
    setWithdrawNominal("");
  };

  const checkBalance = async () => {
    try {
      const tx = await contract.connect(provide);
      const balanceInWei = await tx.checkBalance();
      const balanceInEther = ethers.utils.formatEther(balanceInWei);
      console.log(balanceInEther, "<<<<<<<");
      setBalance(balanceInEther);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="w-full h-screen bg-yellow-300 pt-14 flex items-center justify-center flex-col">
        <h1 className="text-[30px] font-bold mb-10">private wallet </h1>
        <div className="w-1/2 h-fit flex items-center gap-2 justify-center">
          <input
            type="number"
            className="w-1/2 h-10 px-2"
            placeholder="nominal deposit..."
            value={nominal}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length > 1 && value.startsWith("0")) {
                setNominal(value.replace(/^0+/, ""));
              } else {
                setNominal(value);
              }
            }}
            onKeyDown={(e) => {
              if (
                e.key === "e" ||
                e.key === "E" ||
                e.key === "+" ||
                e.key === "-" ||
                e.key === "."
              ) {
                e.preventDefault();
              }
            }}
          />
          <button
            onClick={deposit}
            className="px-10 py-3 bg-red-300 text-white text-xl"
          >
            deposit
          </button>
          <button
            onClick={withdrawAll}
            className="px-10 py-3 bg-red-300 text-white text-xl"
          >
            withdraw all
          </button>
        </div>

        <div className="w-1/2 h-fit flex items-center gap-2 justify-center mt-2">
          <input
            type="number"
            className="w-1/2 h-10 px-2"
            placeholder="nominal deposit..."
            value={withdrawNominal}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length > 1 && value.startsWith("0")) {
                setWithdrawNominal(value.replace(/^0+/, ""));
              } else {
                setWithdrawNominal(value);
              }
            }}
            onKeyDown={(e) => {
              if (
                e.key === "e" ||
                e.key === "E" ||
                e.key === "+" ||
                e.key === "-" ||
                e.key === "."
              ) {
                e.preventDefault();
              }
            }}
          />
          <button
            onClick={withdraw}
            className="px-10 py-3 bg-red-300 text-white text-xl"
          >
            withdraw
          </button>
        </div>

        <div className="w-1/2 h-fit flex items-center justify-center mt-10 gap-2">
          <button
            onClick={checkBalance}
            className="px-2 py-1 bg-red-300 text-white text-xl"
          >
            Check balance
          </button>
          <h1>
            yours balace: <span>{balance ? balance : "loading..."}</span>
          </h1>
        </div>
      </section>
    </>
  );
}

export default PrivateWallet;
