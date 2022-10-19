/** @type import('hardhat/config').HardhatUserConfig */
const { alchemyApiKey, mnemonic } = require('./secrets.json');

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${alchemyApiKey}`,
      accounts: { mnemonic: mnemonic },
    },
  },
};
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-waffle");
