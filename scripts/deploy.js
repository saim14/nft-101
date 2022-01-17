const { ethers } = require("hardhat");

async function main() {
  const DarkNFTs = await ethers.getContractFactory("DarkNFTs");
  const darkNFTs = await DarkNFTs.deploy("DarkNFTs", "DRKs");

  // Using mint function from the contract
  const mintNFT = async () => {
    try {
      const newItemId = await darkNFTs.mint(
        "https://ipfs.io/ipfs/Qmc5xsH2QHzVCPw5HiLAHp5T4AFuhqRYMMDoKNgU3qU5Mo"
      );
      console.log(`NFT minted successfully, new item id: ${newItemId}`);
    } catch (error) {
      console.log(`Minting failed, Error: ${error.message}`);
    }
  };

  try {
    await darkNFTs.deployed();
    console.log(`DarkNFTs deployed successfully to ${darkNFTs.address}`);
    // Calling mint function
    mintNFT();
  } catch (error) {
    console.log(`DarkNFTs deployment failed, Error: ${error.message}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
