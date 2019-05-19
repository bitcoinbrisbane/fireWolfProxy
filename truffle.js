//const mnemonic = "tragic near rocket across biology shop push dragon jazz detail differ say";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4600000
    }
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.0"
    }
  }
};