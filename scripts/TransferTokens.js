// Import necessary packages and contracts
const { ethers } = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/DARK.sol/DARK.json");
require("dotenv").config();
const tokenABI = tokenContractJSON.abi;

// Transfer ERC721A tokens to the Ethereum FxChain network
async function main() {
  
  const networkAddress =
    "https://ethereum-sepolia-rpc.publicnode.com";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const wallet = new ethers.Wallet(privateKey, provider);

  // Get the signer instance 
  const [signer] = await ethers.getSigners();

  // Get ERC721A contract instance
  const NFT = await ethers.getContractFactory("DARK");
  const nft = await NFT.attach("0xa5fD595515c80e34caD7F0878Fdd08f248A8933E");

  // Get the FXRoot contract instance (FxChildTunnel contract on Ethereum FxChain)
  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  const fxRoot = await ethers.getContractAt(fxRootContractABI, fxRootAddress);

  // TokenIds to transfer 
  const tokenIds = [1, 2, 3, 4, 5];

  // Approve the DARK nfts for transfer
  const approveTx = await nft
    .connect(signer)
    .setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log("Approval confirmed");

  // Deposit to the FXRoot contract on the Ethereum FxChain network
  for (let i = 0; i < tokenIds; i++) {
    const depositTx = await fxRoot
      .connect(signer)
      .deposit(nft.address, wallet.address, tokenIds[i], "0x6566");

    // Wait for the transaction to be confirmed
    await depositTx.wait();
  }
  console.log("Approved and deposited to the destination address");

  const balance = await nft.balanceOf(wallet.address);

  // Print the balance of the wallet
  console.log("Current NFT wallet balance", wallet.address,"is: ", balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
