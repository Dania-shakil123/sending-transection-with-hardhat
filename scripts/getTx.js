const ethers = require("ethers");
const { Web3 } = require("hardhat");

require("dotenv").config({ path: __dirname + "/./../.env" });

const API_URL = "https://rinkeby.infura.io/v3/920ccef1f2e44eab8f13dcf8ee93eff6";
const CONTRACT_ADDRESS = "0x7cEbf52A0CBF43820E4Ea197caaA953C9e448dAa";

const CONTRACT_ABI = require("../artifacts/contracts/PlayerContract.sol/PlayerContract.json");

let customHttpProvider = new ethers.providers.JsonRpcProvider(API_URL);

async function getPlayer() {
  let contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    CONTRACT_ABI.abi,
    customHttpProvider
  );

  const getplayer = await contract.getAllPlayer();

  console.log("this transection is Successfull");
  console.log(getplayer.toString());

 
//}})
  }
getPlayer();

  
