import { wallet } from '@cityofzion/neon-js';
import { WalletDisconnectButton, WalletMultiButton } from '@rentfuse-labs/neo-wallet-adapter-ant-design';
import { WitnessScope } from '@rentfuse-labs/neo-wallet-adapter-base';
import { useWallet } from '@rentfuse-labs/neo-wallet-adapter-react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';

const Index: NextPage = () => {
	const { address, connected, getNetworks, invoke } = useWallet();

	const [walletNetwork, setWalletNetwork] = useState<string | null>(null);

	const fetchWalletNetwork = useCallback(async () => {
		try {
			const result = await getNetworks();
			if (result.status === 'success') {
				setWalletNetwork(result.data?.defaultNetwork || null);
			}
		} catch (error) {
			console.error(error);
		}
	}, [getNetworks]);
	useEffect(() => {
		if (connected) {
			fetchWalletNetwork();
		} else {
			setWalletNetwork(null);
		}
	}, [connected, fetchWalletNetwork]);

	console.log(walletNetwork);

	const transferGas = useCallback(async () => {
		if (!address) return;

		const resp = await invoke({
			scriptHash: '0xd2a4cff31913016155e38e474a2c06d08be276cf',
			operation: 'transfer',
			args: [
				{ type: 'Hash160', value: wallet.getScriptHashFromAddress(address) },
				{ type: 'Hash160', value: wallet.getScriptHashFromAddress('NaeVfwjsZBpdYSaLzButjCXby8dvL16Qps') },
				{ type: 'Integer', value: 100000000 },
				{ type: 'Array', value: [] },
			],
			signers: [{ account: wallet.getScriptHashFromAddress(address), scopes: WitnessScope.CalledByEntry }],
		});

		console.log(resp);
		window.alert(JSON.stringify(resp, null, 2));
	}, [address, invoke]);

	return (
		<>
			<div className={'container'}>
				<Head>
					<title>Create Next App</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main className={'main'}>
					<h1 className={'title'}>
						Welcome to <a href="https://nextjs.org">Next.js!</a>
					</h1>

					<div className={'wallet-buttons'}>
						<WalletMultiButton />
						<WalletDisconnectButton />
					</div>

					<p className={'description'}>
						<button onClick={transferGas}>{'Invoke transfer GAS'}</button>
					</p>

					<p className={'description'}>
						Get started by editing <code className={'code'}>pages/index.js</code>
					</p>

					<div className={'grid'}>
						<a href="https://nextjs.org/docs" className={'card'}>
							<h2>Documentation &rarr;</h2>
							<p>Find in-depth information about Next.js features and API.</p>
						</a>

						<a href="https://nextjs.org/learn" className={'card'}>
							<h2>Learn &rarr;</h2>
							<p>Learn about Next.js in an interactive course with quizzes!</p>
						</a>

						<a href="https://github.com/vercel/next.js/tree/master/examples" className={'card'}>
							<h2>Examples &rarr;</h2>
							<p>Discover and deploy boilerplate example Next.js projects.</p>
						</a>

						<a
							href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
							className={'card'}
						>
							<h2>Deploy &rarr;</h2>
							<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
						</a>
					</div>
				</main>

				<footer className={'footer'}>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						Powered by{' '}
						<span className={'logo'}>
							<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
						</span>
					</a>
				</footer>
			</div>

			<style jsx>{`
				.container {
					padding: 0 2rem;
				}

				.main {
					min-height: 100vh;
					padding: 4rem 0;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				.footer {
					display: flex;
					flex: 1;
					padding: 2rem 0;
					border-top: 1px solid #eaeaea;
					justify-content: center;
					align-items: center;
				}

				.footer a {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-grow: 1;
				}

				.title a {
					color: #0070f3;
					text-decoration: none;
				}

				.title a:hover,
				.title a:focus,
				.title a:active {
					text-decoration: underline;
				}

				.title {
					margin: 0;
					line-height: 1.15;
					font-size: 4rem;
				}

				.title,
				.description {
					text-align: center;
				}

				.description {
					margin: 4rem 0;
					line-height: 1.5;
					font-size: 1.5rem;
				}

				.code {
					background: #fafafa;
					border-radius: 5px;
					padding: 0.75rem;
					font-size: 1.1rem;
					font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono,
						Courier New, monospace;
				}

				.grid {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: wrap;
					max-width: 800px;
				}

				.card {
					margin: 1rem;
					padding: 1.5rem;
					text-align: left;
					color: inherit;
					text-decoration: none;
					border: 1px solid #eaeaea;
					border-radius: 10px;
					transition: color 0.15s ease, border-color 0.15s ease;
					max-width: 300px;
				}

				.card:hover,
				.card:focus,
				.card:active {
					color: #0070f3;
					border-color: #0070f3;
				}

				.card h2 {
					margin: 0 0 1rem 0;
					font-size: 1.5rem;
				}

				.card p {
					margin: 0;
					font-size: 1.25rem;
					line-height: 1.5;
				}

				.logo {
					height: 1em;
					margin-left: 0.5rem;
				}

				@media (max-width: 600px) {
					.grid {
						width: 100%;
						flex-direction: column;
					}
				}

				.wallet-buttons {
					padding-top: 2rem;
					display: flex;
					flex-direction: column;
					gap: 2rem;
				}
			`}</style>
		</>
	);
};

export default Index;
