const HDWalletProvider = require('@truffle/hdwallet-provider');
const {interface, bytecode} = require('./compile');
const Web3 = require("web3");



const provider= new HDWalletProvider(
    'thumb degree yard uncover sample danger punch soap eager cross path retire',
    'https://goerli.infura.io/v3/70b6aa6fb7fc416b881f90ca3f0994c4'
)
const web3 = new Web3(provider);

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account' ,accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
                .deploy({data:bytecode})
                .send({from:accounts[0], gas:'1000000'});
                
    console.log(interface)
    console.log('Contract deployed to',result.options.address);
}
deploy()
