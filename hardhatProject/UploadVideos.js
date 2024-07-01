// deploy.js

const hre = require("hardhat");

async function main() {
  const UploadVideos = await ethers.getContractFactory("UploadVideos"); // Use the correct contract name
  const uploadVideos = await UploadVideos.deploy();

  await uploadVideos.deployed;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
