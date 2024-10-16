const Web3 = require('web3');
const Contract = require('@truffle/contract');
const ImpactInvestContract = require('../../build/contracts/ImpactInvest.json');

class BlockchainService {
  constructor() {
    this.web3 = new Web3(new Web3.providers.HttpProvider(process.env.ETHEREUM_NODE_URL));
    this.contract = Contract(ImpactInvestContract);
    this.contract.setProvider(this.web3.currentProvider);
  }

  async createProject(entrepreneur, fundingGoal, deadline) {
    const instance = await this.contract.deployed();
    const accounts = await this.web3.eth.getAccounts();
    const result = await instance.createProject(fundingGoal, deadline, { from: accounts[0] });
    return result.logs[0].args.projectId.toNumber();
  }

  async invest(projectId, amount, investor) {
    const instance = await this.contract.deployed();
    const result = await instance.invest(projectId, amount, { from: investor });
    return result.tx;
  }
}

module.exports = new BlockchainService();