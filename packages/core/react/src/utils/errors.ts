import { WalletError } from '@boxfoxs/neo-wallet-adapter-base';

export class WalletNotSelectedError extends WalletError {
	name = 'WalletNotSelectedError';
}
