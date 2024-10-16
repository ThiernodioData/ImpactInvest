let web3;
let contract;

async function initWeb3() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
    } catch (error) {
      console.error("User denied account access");
    }
  } else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
  } else {
    console.log('Non-Ethereum browser detected. Consider trying MetaMask!');
  }
}

async function loadContract() {
  const response = await fetch('/api/blockchain/contract-abi');
  const contractABI = await response.json();
  const contractAddress = '0x...'; // Adresse de votre contrat déployé
  contract = new web3.eth.Contract(contractABI, contractAddress);
}

async function invest(projectId, amount) {
  try {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.invest(projectId, amount).send({ from: accounts[0] });
    // Gérer le succès de l'investissement
  } catch (error) {
    console.error('Investment error:', error);
  }
}

// ... autres fonctions liées à la blockchain