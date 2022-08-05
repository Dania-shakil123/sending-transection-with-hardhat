const ethers = require("ethers");
require("dotenv").config({ path: __dirname + "/./../.env" });


const API_URL = "https://rinkeby.infura.io/v3/920ccef1f2e44eab8f13dcf8ee93eff6";
const PRIVATE_KEY = "92039a86d95b84d17f0f26f6704741aea016d76232427d2c4a06ad625b4062e4";
const CONTRACT_ADDRESS = "0x7cEbf52A0CBF43820E4Ea197caaA953C9e448dAa";
const CONTRACT_ABI = require("../artifacts/contracts/PlayerContract.sol/PlayerContract.json");

let customHttpProvider = new ethers.providers.JsonRpcProvider(API_URL);

async function addPlayer(name, level, highestScore) {
  let wallet = new ethers.Wallet(PRIVATE_KEY, customHttpProvider);

  let signer = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI.abi, wallet);

  const addPly = await signer.addPlayer(name, level, highestScore);

  console.log("Tx is Successfull");
  console.log(addPly);
}

addPlayer("Dia Rajpot", 10, 8799);