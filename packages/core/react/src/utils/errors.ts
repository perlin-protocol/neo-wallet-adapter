import { WalletError } from '@perlin/neo-wallet-adapter-base';

export class WalletNotSelectedError extends WalletError {
	name = 'WalletNotSelectedError';
}
