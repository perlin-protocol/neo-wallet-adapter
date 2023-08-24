import { WalletAdapter } from '@perlin-protocol/neo-wallet-adapter-base';

export enum WalletName {
	NeoLine = 'NeoLine',
	O3 = 'O3',
	WalletConnect = 'WalletConnect',
	Neon = 'Neon',
	OneGate = 'OneGate',
}

export interface Wallet {
	name: WalletName;
	url: string;
	icon: string;
	adapter: () => WalletAdapter;
}
