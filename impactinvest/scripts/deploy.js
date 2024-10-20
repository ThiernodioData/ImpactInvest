const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const InvestmentPlatform = await hre.ethers.getContractFactory("InvestmentPlatform");
  const paymentTokenAddress = "0x..."; // Remplacez par l'adresse du token ERC20 que vous souhaitez utiliser
  const investmentPlatform = await InvestmentPlatform.deploy(paymentTokenAddress);

  await investmentPlatform.deployed();

  console.log("InvestmentPlatform deployed to:", investmentPlatform.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });