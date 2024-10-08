const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/DARK.sol/DARK.json");

const tokenAddress = "0xa5fD595515c80e34caD7F0878Fdd08f248A8933E"; // Ethereum address of the deployed ERC721A contract
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x4F694cD2Cf05945Ea40AACDdD39ee8ca903e2BA6"; // Ethereum public address for the wallet

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have a total number of: " + await token.balanceOf(walletAddress) + " tokens in the wallet.");
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
