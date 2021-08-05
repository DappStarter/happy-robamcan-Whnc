require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strong dash maze color gloom arena metal gather'; 
let testAccounts = [
"0x5058140fdc4401f8bf3cad3917241e71796769150019d67ddca13287a98cdcf7",
"0xe1d943949cc605bb6af7948a0c83e0da94e5e5f76015c460366ff86e15c8c17a",
"0x0fdedf86054bc91464d88368e004e90c0abc42faf9c55de7c1b3d1f085167721",
"0x98374977d36dd8dc6eaa719c516fab9f42a5ddbdc98e587027a924924f7cb4a7",
"0x4ec3383f80e20d1140458270cec93e1e29015aec58b59af2da8686d3db674bb9",
"0x03684eb49b38bde8a15048e32e7d271eb38b729a27ee79a976c184624a4fd734",
"0xa0307a2e3bfe9ee4aa8ab37e1ddd3dbc637c2860f829295e978ebf542fba12d4",
"0x9b68ae44377ef068eddebda46a99d5f85269b05cc0e261ea5ce49a803db55fd2",
"0xd49455420ac959894408c7e4340da3681ddb8f062df74782a5b57df8929db2e2",
"0x822f017ca74be9f1f79821b7c03b83fc58b82ef5a19d3fab889c96919f04fc33"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


