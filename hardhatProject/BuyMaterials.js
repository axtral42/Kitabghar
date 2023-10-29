const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying the Marketplace contract with the account:",
    deployer.address
  );

  const Marketplace = await ethers.getContractFactory("BuyMaterials");
  const marketplace = await Marketplace.deploy();

  await marketplace.deployed;

  console.log("Marketplace contract address:", marketplace.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
