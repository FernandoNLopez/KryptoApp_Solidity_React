// https://eth-sepolia.g.alchemy.com/v2/m-QEo__-HGeBB4_2Tovv6jz_HXAlzRyG


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/m-QEo__-HGeBB4_2Tovv6jz_HXAlzRyG',
      accounts: [ '48f72b47b33920b875ad7e0e40bf6d7a2ee14dd059aaad1440d969027a1e47e2' ]
    }
  }
}