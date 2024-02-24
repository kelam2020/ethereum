import { ethers } from 'ethers';
import Web3 from 'web3';

// Function to get the last block number
async function getLastBlockNumber() {
  const provider = new ethers.providers.InfuraProvider(
    'mainnet', // Specify the network (mainnet in this case)
    '49VTNp94nvMnv77WXOJa/njpE3fZW2v7q0Ah+er2Rg7PMAY7XmWYpg' // Replace with your Infura project ID
  );

  const blockNumber = await provider.getBlockNumber();
  return blockNumber;
}

// Function to get the USDT balance of an address
async function getUSDTBalance(address: string) {
  const web3 = new Web3('https://mainnet.infura.io/v3/49VTNp94nvMnv77WXOJa/njpE3fZW2v7q0Ah+er2Rg7PMAY7XmWYpg'); // Replace with your Infura project ID
  const contractAddress = 'malek'; // USDT token contract address

  const contract = new web3.eth.Contract(ERC20ABI, contractAddress);

  const balance = await contract.methods.balanceOf(address).call();
  return balance;
}

// Main function to display the last block number and USDT balance
async function main() {
  try {
    const lastBlockNumber = await getLastBlockNumber();
    console.log('Last block number:', lastBlockNumber);

    const address = 'malek'; // Replace with the Ethereum address you want to check
    const balance = await getUSDTBalance(address);
    console.log('USDT balance:', balance);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the main function
main();


