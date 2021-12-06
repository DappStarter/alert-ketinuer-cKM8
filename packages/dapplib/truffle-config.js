require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe stove razor spider column install clog metal genre'; 
let testAccounts = [
"0x609ba5ce58e2b99b1b20b3b166e656386f14cbe2d4b584b8a8d8c181570f41b9",
"0x798fafa686e80b6aac55589abed74e9c1299c5601d3e43cb8550cb89a6a19da3",
"0xfd75de4ac9414011d954d18e63069d31f888bffb4e7920870155affb48d39ae7",
"0x21ab1c7df77be1c7c5776d5f868cd2d2901e797aec10f3c4fdeb3f874201fa26",
"0x6219ced45a37d40d6769e28cf242bf50e909077179de67330fe841b5dd997676",
"0x2fa61070632b168177d2a83ae93ce59e2dec6eb3b97999c3b55d17344d60ae38",
"0x2556013d29248139e3cc7f3ecde1a1565506efe0eaeac7f935fad80486640de0",
"0x282f8cd6d9f58801f2cca236c9f98129f999a20d1e80f897b57b145d42a2da4a",
"0x9f0e4247d1d8888c7affc33323987abd262923678294864dcedcef70a5f17102",
"0xd51923d843718305b997456686235933bd2c8cc98f293011b3c6f21c95247a20"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

