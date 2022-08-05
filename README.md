# sending-transection-with-hardhat
npm 7+
npm 6
yarn
npm init
Now we can install Hardhat:

npm 7+
npm 6
yarn
npm install --save-dev hardhat
In the same directory where you installed Hardhat run:

npx hardhat
Select Create an empty hardhat.config.js with your keyboard and hit enter.

$ npx hardhat
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.9.9 👷‍

? What do you want to do? …
  Create a JavaScript project
  Create a TypeScript project
❯ Create an empty hardhat.config.js
  Quit
When Hardhat is run, it searches for the closest hardhat.config.js file starting from the current working directory. This file normally lives in the root of your project and an empty hardhat.config.js is enough for Hardhat to work. The entirety of your setup is contained in this file.

# Hardhat's architecture
Hardhat is designed around the concepts of tasks and plugins. The bulk of Hardhat's functionality comes from plugins, and you're free to choose the ones you want to use.

#Tasks
Every time you're running Hardhat from the command-line, you're running a task. For example, npx hardhat compile is running the compile task. To see the currently available tasks in your project, run npx hardhat. Feel free to explore any task by running npx hardhat help [task].

TIP

You can create your own tasks. Check out the Creating a task guide.

#Plugins
Hardhat is unopinionated in terms of what tools you end up using, but it does come with some built-in defaults. All of which can be overriden. Most of the time the way to use a given tool is by consuming a plugin that integrates it into Hardhat.

In this tutorial we are going to use our recommended plugin, 
@nomicfoundation/hardhat-toolbox
, which has everything you need for developing smart contracts.

To install it, run this in your project directory:

npm 7+
npm 6
yarn
npm install --save-dev @nomicfoundation/hardhat-toolbox
Add the highlighted line to your hardhat.config.js so that it looks like this:

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
};


. Writing and compiling smart contracts
We're going to create a simple smart contract that implements a token that can be transferred. Token contracts are most frequently used to exchange or store value. We won't go in depth into the Solidity code of the contract on this tutorial, but there's some logic we implemented that you should know:


# Writing smart contracts


# Compiling contracts
To compile the contract run npx hardhat compile in your terminal. The compile task is one of the built-in tasks.

$ npx hardhat compile
Compiling 1 file with 0.8.9
Compilation finished successfully


# Testing contracts
Writing automated tests when building smart contracts is of crucial importance, as your user's money is what's at stake.

To test our contract, we are going to use Hardhat Network, a local Ethereum network designed for development. It comes built-in with Hardhat, and it's used as the default network. You don't need to setup anything to use it.


$ npx hardhat test

  Token contract
    ✓ Deployment should assign the total supply of tokens to the owner (654ms)


  1 passing (663ms)
  
  
  
  #Deploying to live network
  
  npx hardhat run scripts/deploy.js --network <network-name>
With our current configuration, running it without the --network parameter would cause the code to run against an embedded instance of Hardhat Network. In this scenario, the deployment actually gets lost when Hardhat finishes running, but it's still useful to test that our deployment code works:

$ npx hardhat run scripts/deploy.js
Deploying contracts with the account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Account balance: 10000000000000000000000
Token address: 0x5FbDB2315678afecb367f032d93F642f64180aa3
