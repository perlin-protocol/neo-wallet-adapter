import { O3WalletAdapter, O3WalletAdapterConfig } from '@perlin/neo-wallet-adapter-o3';
import { Wallet, WalletName } from './types';

export const getO3Wallet = (config?: O3WalletAdapterConfig): Wallet => ({
	name: WalletName.O3,
	url: 'https://o3.network/',
	icon: 'data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwMGFmOTI7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT7nlLvmnb8gNTkg5Ymv5pysIDM8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTg4OS40Miw0NzZhMTIwLDEyMCwwLDAsMC0xOTUuMjUtOTMuNDcsNDAsNDAsMCwwLDAsNTAuMTksNjIuMjlBMzkuNTcsMzkuNTcsMCwwLDEsNzY5LjQyLDQzNmE0MCw0MCwwLDEsMSwwLDgwLDQwLDQwLDAsMCwwLDAsODAsNDAsNDAsMCwxLDEsMCw4MGMtLjY1LDAtMS4yOSwwLTEuOTMsMHMtMS4yOCwwLTEuOTMsMGgtMzgxYy05My43NCwwLTE3MC03Ni4yNi0xNzAtMTcwczc2LjI2LTE3MCwxNzAtMTcwLDE3MCw3Ni4yNiwxNzAsMTcwYTE3MC4xMywxNzAuMTMsMCwwLDEtMjAuNSw4MSw0MCw0MCwwLDEsMCw3MC4zLDM4LjE5QTI1MCwyNTAsMCwxLDAsMzg0LjU4LDc1NmgzODFjLjY1LDAsMS4yOSwwLDEuOTMsMHMxLjI4LDAsMS45MywwYTExOS45MywxMTkuOTMsMCwwLDAsODkuMzYtMjAwQTExOS41MiwxMTkuNTIsMCwwLDAsODg5LjQyLDQ3NloiLz48L3N2Zz4=',
	adapter: () => new O3WalletAdapter(config),
});
