import { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "../../../../ABI/simple_wallet.js";

function SimpleWallet() {
  const [contract, setContract] = useState({});
  const [balance, setBalance] = useState(undefined);
  const [provide, setProvide] = useState({});

  useEffect(() => {
    connectEther();
  }, [balance]);

  const connectEther = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        await ethereum.request({ method: "eth_requestAccounts" });
        const prov = new ethers.providers.Web3Provider(window.ethereum);
        const sig = await prov.getSigner();
        setProvide(sig);
        // console.log(sig, ">>>>>>>>>>>");

        const contractAddress = import.meta.env
          .VITE_ADDRESS_CONTRACT_SIMPLE_ADDRESS;
        // console.log(abi, "????");

        const smartContract = new ethers.Contract(contractAddress, abi, prov); // connect ke contractnya
        // console.log(smartContract, "??????????????????????");
        setContract(smartContract);
        const balanceInWei = await smartContract.showBalanceInAddress();
        const balanceInEther = ethers.utils.formatEther(balanceInWei);
        // console.log(balanceInEther, "<<<<<<<");
        setBalance(balanceInEther);
      } else {
        console.log("Ethereum wallet is not connected. !!!!!");
      }
    } catch (error) {
      console.log(error, "!!!!!!!!!!!!!!!!!");
    }
  };

  const deposit = async () => {
    console.log("click");
    const tx = await contract.connect(provide); // connect user yang ke smart contract
    console.log(tx);

    const response = await tx.deposit({
      value: ethers.utils.parseEther("11"), // 11 eth
    });

    console.log(response, "????");
  };

  return (
    <>
      <section className="w-full h-screen bg-yellow-300 pt-14 flex items-center justify-center flex-col">
        <h1 className="text-[30px] font-bold mb-10">
          simple wallet smart contract
        </h1>
        <div className="w-1/2 h-fit flex items-center gap-2 justify-center">
          <input
            type="text"
            className="w-1/2 h-10 px-2"
            placeholder="nominal deposit..."
          />
          <button
            onClick={deposit}
            className="px-10 py-3 bg-red-300 text-white text-xl"
          >
            deposit
          </button>
        </div>
        <div className="w-1/2 h-fit flex flex-col items-center justify-center mt-10">
          <h1>
            balace: <span>{balance ? balance : "loading..."}</span>
          </h1>
        </div>
      </section>
    </>
  );
}

export default SimpleWallet;
