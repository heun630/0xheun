import React, { useState } from 'react';
import * as S from './styled';

const MultiChainWalletConnect: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'EVM' | 'Solana'>('EVM');

  const evmWallets = [
    { name: 'MetaMask', logo: 'https://example.com/metamask-logo.png' },
    { name: 'SafePal', logo: 'https://example.com/safepal-logo.png' },
    { name: 'BitgetWallet', logo: 'https://example.com/bitgetwallet-logo.png' },
    { name: 'Gate Wallet', logo: 'https://example.com/gatewallet-logo.png' },
    { name: 'Wallet Connect', logo: 'https://example.com/walletconnect-logo.png' },
    { name: 'TokenPocket', logo: 'https://example.com/tokenpocket-logo.png' },
    { name: 'OKX Web3 Wallet', logo: 'https://example.com/okxwallet-logo.png' },
  ];

  const solanaWallets = [
    { name: 'Phantom', logo: 'https://example.com/phantom-logo.png' },
    { name: 'Backpack', logo: 'https://example.com/backpack-logo.png' },
    { name: 'Solflare', logo: 'https://example.com/solflare-logo.png' },
    { name: 'Torus', logo: 'https://example.com/torus-logo.png' },
  ];

  const wallets = activeTab === 'EVM' ? evmWallets : solanaWallets;

  const connectWallet = (walletName: string) => {
    alert(`Connecting to ${walletName}...`);
  };

  return (
    <S.Container>
      <S.Tabs>
        <S.Tab active={activeTab === 'EVM'} onClick={() => setActiveTab('EVM')}>
          EVM
        </S.Tab>
        <S.Tab active={activeTab === 'Solana'} onClick={() => setActiveTab('Solana')}>
          SOLANA
        </S.Tab>
      </S.Tabs>
      <S.WalletList>
        {wallets.map((wallet) => (
          <S.WalletItem key={wallet.name} onClick={() => connectWallet(wallet.name)}>
            <img src={wallet.logo} alt={`${wallet.name} logo`} />
            <span>{wallet.name}</span>
          </S.WalletItem>
        ))}
      </S.WalletList>
    </S.Container>
  );
};

export default MultiChainWalletConnect;
