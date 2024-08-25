# NFT Collection Deployment and Transfer 

> Sepolia to Amoy Bridge

> Can Be Bridged between ETHERIUM and POLYGON Blockchain

> Used ERC721A for less Gas consumption

## Description

This project involves the deployment of a 5-item NFT collection using Bing AI-generated images. The NFTs are stored on IPFS using pinata.cloud, and an ERC721A contract is deployed to the Goerli Ethereum Testnet. The contract includes functionalities such as minting, transferring, and mapping the NFTs.

## Getting Started

### Prerequisites

* Node.js and npm installed.
* Hardhat Ethereum development environment set up.
* Metamask Configured to Sepolia Testnet
* Test Sepolia in Account in Testnet Network

### Installation

1. Clone this repository: `git clone https://github.com/Priyanshu4277/POLYGON-NFT-BRIDGE.git`
2. Navigate to the project folder.
3. Install dependencies: `npm install`
### Wallet Config
- Network name : Sepolia
- New RPC URL : https://polygon-amoy.blockpi.network/v1/rpc/public
- Chain ID : 5
- Currency Symbo : ETH
- Block Explorer URL : https://ethereum-sepolia-rpc.publicnode.com
> Block Explorer URL is Optional
### Contract Name and Symbol

```solidity
contract Rambat is ERC721A
```
Name : Rambat  
Symbol :RAB

The `Rambat` contract extends the `ERC721A` contract and represents a collection of unique NFTs inspired by the DC Comic universe and batman series.

### Maximum Quantity of Tokens

```solidity
uint256 public maxLimit = 5;
```

The `maxLimit` variable sets the maximum number of NFTs that can be minted within this collection. In this contract, the maximum limit is set to 5 tokens.

### Base URL for NFTs (IPFS Base URL)

```solidity
string baseUrl = "https://gateway.pinata.cloud/ipfs/QmbGv2EgvbsBWKjF2oJU5yQ2Q6H165fnkUiuPqfyBT74fq/";
```

The `baseUrl` variable defines the base URL for the NFTs' metadata. This URL will be combined with the token ID to form the complete URL for accessing each NFT's metadata stored on the IPFS platform.

### Prompt Description

```solidity
string public prompt = "Ram Man VS Batman, conceptual art, cinematic, poster. ";
```
> Prompt can be anything based your Intrest 

### Deploy ERC721A Contract to Goerli Testnet

1. Create an `.env` file and set your Ethereum wallet private key.
2. Configure Hardhat network settings in `hardhat.config.js`.
3. Run the deployment script: `npx hardhat run scripts/DEPLOY.js --network sepolia`

### Batch Mint NFTs

1. Edit the `MINT.js` script with required details.
2. Run the script: `npx hardhat run scripts/MINT.js --network sepolia`

### Batch Transfer NFTs to Polygon Mumbai

1. Set up FxPortal Bridge for Ethereum to Polygon transfer.
2. Edit the `TransferTokens.js` script with necessary details.
3. Run the script: `npx hardhat run scripts/TransferTokens.js --network sepolia`

### Check Balance 
1. Edit the `getBalance.js` script with required details.
2. Run the script: `npx hardhat run scripts/getBalance.js --network amoy`
## Authors

- Priyanshu Vasava
