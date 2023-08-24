import { WalletError } from '@perlin-protocol/neo-wallet-adapter-base';

export class WalletNotSelectedError extends WalletError {
	name = 'WalletNotSelectedError';
}
