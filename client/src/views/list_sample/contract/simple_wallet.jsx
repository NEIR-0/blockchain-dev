import { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "../../../../ABI/simple_wallet.js";

function SimpleWallet() {
  const [contract, setContract] = useState({});
  const [balance, setBalance] = useState(undefined);

  useEffect(() => {
    connectEther();
  }, [balance]);

  const connectEther = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        await ethereum.request({ method: "eth_requestAccounts" });
        const prov = new ethers.providers.Web3Provider(window.ethereum);
        const sig = await prov.getSigner();
        // console.log(sig, ">>>>>>>>>>>");

        const contractAddress = import.meta.env
          .VITE_ADDRESS_CONTRACT_SIMPLE_ADDRESS;
        // console.log(abi, "????");

        const smartContract = new ethers.Contract(contractAddress, abi, prov); // connect ke contractnya
        console.log(smartContract, "??????????????????????");
        setContract(smartContract);
        const balanceInWei = await smartContract.showBalanceInAddress();
        const balanceInEther = ethers.utils.formatEther(balanceInWei);
        console.log(balanceInEther, "<<<<<<<");
        setBalance("udin");
      } else {
        console.log("Ethereum wallet is not connected.");
      }
    } catch (error) {
      console.log(error, "!!!!!!!!!!!!!!!!!");
    }
  };

  return (
    <>
      <section className="w-full h-screen bg-yellow-300 pt-14 flex items-center justify-center flex-col">
        <h1 className="text-[30px] font-bold mb-10">simple wallet</h1>
        <div className="w-1/2 h-fit flex items-center gap-2 justify-center">
          <input
            type="text"
            className="w-1/2 h-10 px-2"
            placeholder="nominal deposit..."
          />
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
