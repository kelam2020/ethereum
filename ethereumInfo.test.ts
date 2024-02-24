import { getLastBlockNumber, getUSDTBalance } from './ethereumInfo';

describe('Ethereum Info', () => {
  it('should fetch the last block number', async () => {
    const lastBlockNumber = await getLastBlockNumber();
    expect(lastBlockNumber).toBeGreaterThan(0);
  });

  it('should fetch the USDT balance of an address', async () => {
    const address = 'malek'; // Replace with the Ethereum address you want to test
    const balance = await getUSDTBalance(address);
    expect(balance).toBeDefined();
    expect(balance).toMatch(/^\d+$/);
  });
});