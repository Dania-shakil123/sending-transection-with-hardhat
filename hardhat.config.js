require("@nomiclabs/hardhat-waffle");

require("@nomiclabs/hardhat-ethers");

module.exports = {}

require ("dotenv").config();
const  { API_URL , PRIVATE_KEY } = process.env;

//this is a sampple hardhat task
//https://hardhat.org/guides/create.task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts){
  console.log(account.address );
 }
});
module.exports = {
  solidity: "0.8.14",
  defaultNetwork: "rinkeby",
  networks: {
  hardhat: {},
  rinkeby: {
  url: "https://rinkeby.infura.io/v3/920ccef1f2e44eab8f13dcf8ee93eff6",
  accounts: [`0x${'92039a86d95b84d17f0f26f6704741aea016d76232427d2c4a06ad625b4062e4'}`],
  gasMultiplayer:1,
  gas: 2100000,
  gasPrice: 8000000000,
  timeout:20000,
  saveDeployments: true,
  chainId: 4,

  }
},
};
