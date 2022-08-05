
const hre = require("hardhat");

async function main() {
  const Player = await hre.ethers.getContractFactory("PlayerContract");
  console.log("deploying contact to .......");
  const player = await Player.deploy();

  await player.deployed();

  console.log("Player contract deployed to:", player.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(() =>process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
