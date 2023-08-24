import { OneGateWalletAdapter, OneGateWalletAdapterConfig } from '@perlin/neo-wallet-adapter-onegate';
import { Wallet, WalletName } from './types';

export const getOneGateWallet = (config?: OneGateWalletAdapterConfig): Wallet => ({
	name: WalletName.OneGate,
	url: 'https://onegate.space/',
	icon: 'data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05Ljk5NzIzIDEuNzQzODVMNi4xNjk5MiAzLjMyNzYxTDYuNDMxMTMgMy45NTg4NUwxMC4yNTg0IDIuMzc1MDlMOS45OTcyMyAxLjc0Mzg1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEwLjIwMTMgMS4yNTM5OUw1LjY4NDU3IDMuMTIzMDVMNi4yMzEwOSA0LjQ0Mzc2TDEwLjc0NzkgMi41NzQ3TDEwLjIwMTMgMS4yNTM5OVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMC4yNTg3IDEuMTI0NzJMNS41NTQ2OSAzLjA3MDMxTDYuMTc4MjkgNC41NzgwNkwxMC44ODIzIDIuNjMyNDdMMTAuMjU4NyAxLjEyNDcyWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTUuOTY4ODIgNS4wNjQwM0w1LjA2MzQ4IDIuODY4NjRMMTAuNDUyNCAwLjYzNjc4TDExLjM2NDQgMi44MzIxNkw1Ljk2ODgyIDUuMDY0MDNaTTYuMDM1MTUgMy4yNzMyM0w2LjM2Njc4IDQuMDkyMzZMMTAuMzc5NSAyLjQzNDIxTDEwLjA0NzkgMS42MTE3N0w2LjAzNTE1IDMuMjczMjNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTAuMjYwNCAxLjEwNzA0TDUuNTMyMjMgMy4wNjM2TDYuMTY3NSA0LjU5ODgxTDEwLjg5NTcgMi42NDIyNkwxMC4yNjA0IDEuMTA3MDRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNS45NjkzOSA1LjA4Mzk3TDUuMDUwNzggMi44NjIwNUwxMC40NjMgMC42MjAyMzlMMTEuMzgxNiAyLjg0MjE1TDUuOTY5MzkgNS4wODM5N1pNNi4wMjI0NSAzLjI2MzMyTDYuMzcwNjYgNC4xMDg5OEwxMC40MTMyIDIuNDUwODNMMTAuMDU4NCAxLjU5MTkxTDYuMDIyNDUgMy4yNjMzMloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik01LjkwOTkzIDUuMjE2NDVMNC45MTUwNCAyLjgwNTVMMTAuNTE2MyAwLjQ4NDFMMTEuNTExMSAyLjg5MTczTDUuOTA5OTMgNS4yMTY0NVpNNi4xNTIwMiAzLjMxNjIxTDYuNDIzOTUgMy45Nzk0N0wxMC4yODA4IDIuMzgxMDJMMTAuMDA4OSAxLjcxNzc2TDYuMTUyMDIgMy4zMTYyMVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik01LjcxMTE0IDUuNzAwN0w0LjQyNzczIDIuNjAzMjlMMTAuNzE4NyAwTDEyLjAwMjEgMy4wOTc0Mkw1LjcxMTE0IDUuNzAwN1pNNS4zOTk0MSAzLjAwNzg4TDYuMTEyNDEgNC43MjkwM0wxMS4wMzA1IDIuNjkyODNMMTAuMzE3NSAwLjk3MTY3M0w1LjM5OTQxIDMuMDA3ODhaTTYuMjIxODUgNC40NjM3M0w1LjY2NDcxIDMuMTE3MzFMMTAuMjA0NyAxLjIzNjk4TDEwLjc2NTIgMi41ODMzOUw2LjIyMTg1IDQuNDYzNzNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMy4yODM5NCA2LjE1NjExTDEuNzA5OTYgOS45NjY4TDIuMzM4NDYgMTAuMjI2NEwzLjkxMjQ0IDYuNDE1NzFMMy4yODM5NCA2LjE1NjExWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTMuMTI4NDUgNS42Njk4OEwxLjI1NzgxIDEwLjE4NkwyLjU3ODMzIDEwLjczM0w0LjQ0ODk3IDYuMjE2ODZMMy4xMjg0NSA1LjY2OTg4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTMuMDI4MTQgNS41Mzk2M0wxLjA5Mzc1IDEwLjIyMjlMMi41OTQ4NCAxMC44NDI5TDQuNTI5MjMgNi4xNTk2NUwzLjAyODE0IDUuNTM5NjNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMi44MzIxIDExLjM1MTdMMC42MzY3MTkgMTAuNDQzTDIuODcxOSA1LjA1NDA1TDUuMDY3MjggNS45NjkzNEwyLjgzMjEgMTEuMzUxN1pNMS42MDgzOSAxMC4wMjUyTDIuNDMwODMgMTAuMzU2OEw0LjA4ODk4IDYuMzQwNzdMMy4yNjk4NSA2LjAwOTE0TDEuNjA4MzkgMTAuMDI1MloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0zLjA2NDUgNS41MjI3NUwxLjEwNTQ3IDEwLjI0OTlMMi42NDAzNSAxMC44ODZMNC41OTkzOCA2LjE1ODg0TDMuMDY0NSA1LjUyMjc1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIuODM4NzIgMTEuMzcxN0wwLjYyMDExNyAxMC40NDk3TDIuODYxOTMgNS4wMzQyNEw1LjA4Mzg1IDUuOTY5NDNMMi44Mzg3MiAxMS4zNzE3Wk0xLjU5MTc5IDEwLjA0NTJMMi40Mzc0NCAxMC4zOTM0TDQuMTEyMTcgNi4zNTc0NEwzLjI2NjUyIDYuMDA1OTFMMS41OTE3OSAxMC4wNDUyWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIuODk0OTMgMTEuNTA0MkwwLjQ4NzMwNSAxMC41MDkzTDIuODA4NzEgNC45MDQ4Mkw1LjIxNjM0IDUuODk5N0wyLjg5NDkzIDExLjUwNDJaTTEuNzI0MjggOS45OTIwMUwyLjM4NzU0IDEwLjI2MzlMMy45NzkzNiA2LjQxMzczTDMuMzE2MSA2LjEzODQ4TDEuNzI0MjggOS45OTIwMVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0zLjA5NzQyIDExLjk4ODRMMCAxMC43MDVMMi42MDY2IDQuNDA0MDJMNS43MDQwMiA1LjY4NzQzTDMuMDk3NDIgMTEuOTg4NFpNMC45NzE2NzMgMTAuMzAzN0wyLjY5MjgzIDExLjAxNjdMNC43MzIzNSA2LjEwMTk2TDMuMDExMTkgNS4zODg5NkwwLjk3MTY3MyAxMC4zMDM3Wk0yLjU4MzM5IDEwLjc1MTRMMS4yMzY5OCAxMC4xOTQzTDMuMTE3MzEgNS42NTQyNkw0LjQ2NzA0IDYuMjExNEwyLjU4MzM5IDEwLjc1MTRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjAuNjY2NCA2LjE4NDE3TDIwLjAzNTIgNi40NDU1TDIxLjYxOTYgMTAuMjcyNUwyMi4yNTA4IDEwLjAxMTJMMjAuNjY2NCA2LjE4NDE3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIwLjg2OTUgNS42OTg1NEwxOS41NDg4IDYuMjQ1MDZMMjEuNDE3OSAxMC43NjE4TDIyLjczODYgMTAuMjE1M0wyMC44Njk1IDUuNjk4NTRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjAuOTI1NSA1LjU2MzM3TDE5LjQxOCA2LjE4NzVMMjEuMzY1MiAxMC44OTA5TDIyLjg3MjcgMTAuMjY2N0wyMC45MjU1IDUuNTYzMzdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjEuMTYxNiAxMS4zNzgzTDE4LjkyOTcgNS45ODkzMUwyMS4xMjUxIDUuMDc3MzNMMjMuMzU2OSAxMC40Njk2TDIxLjE2MTYgMTEuMzc4M1pNMTkuOTAxNCA2LjQwMzg1TDIxLjU1OTUgMTAuNDE5OUwyMi4zNzg2IDEwLjA4ODJMMjAuNzIwNSA2LjA3NTUzTDE5LjkwMTQgNi40MDM4NVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yMC45MzM1IDUuNTQ2MDlMMTkuMzk4NCA2LjE4MTY0TDIxLjM1NTggMTAuOTA5NUwyMi44OTA5IDEwLjI3NEwyMC45MzM1IDUuNTQ2MDlaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjEuMTU0MSAxMS4zOTgyTDE4LjkwMjMgNS45NjkzOUwyMS4xMjQzIDUuMDUwNzhMMjMuMzY2MSAxMC40NjYzTDIxLjE1NDEgMTEuMzk4MlpNMTkuODk3MiA2LjM4MzkzTDIxLjU1NTQgMTAuNDIzMkwyMi40MDEgMTAuMDc1TDIwLjc0MjkgNi4wMzI0TDE5Ljg5NzIgNi4zODM5M1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yMS4wOTg3IDExLjUzMDhMMTguNzc3MyA1LjkyNjI1TDIxLjE4NSA0LjkzMTM3TDIzLjUwNjQgMTAuNTM1OUwyMS4wOTg3IDExLjUzMDhaTTIwLjAxNzYgNi40MzY5NkwyMS42MTI4IDEwLjI4MDVMMjIuMjc2IDEwLjAwODZMMjAuNjg0MiA2LjE1NTA4TDIwLjAxNzYgNi40MzY5NloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yMC44OTI3IDEyLjAxNDlMMTguMjg2MSA1LjcxMzk1TDIxLjM4MzYgNC40MzA1NEwyMy45ODY4IDEwLjczMTVMMjAuODkyNyAxMi4wMTQ5Wk0xOS4yNjQ0IDYuMTI1MTdMMjEuMzAwNiAxMS4wNDMyTDIzLjAyMTggMTAuMzMwMkwyMC45ODU2IDUuNDE1NDhMMTkuMjY0NCA2LjEyNTE3Wk0yMS40MTAxIDEwLjc2OEwxOS41Mjk3IDYuMjM3OTJMMjAuODkyNyA1LjY3NzQ3TDIyLjc3MzEgMTAuMjIwOEwyMS40MTAxIDEwLjc2OFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xNC4wMTU0IDEuNzQzNUwxMy43NTM5IDIuMzc0NkwxNy41ODA0IDMuOTYwMzZMMTcuODQxOSAzLjMyOTI2TDE0LjAxNTQgMS43NDM1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEzLjgxNjcgMS4yNTUyOUwxMy4yNjk1IDIuNTc1NzFMMTcuNzg1MyA0LjQ0NzE0TDE4LjMzMjUgMy4xMjY3MkwxMy44MTY3IDEuMjU1MjlaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTMuNzYzMyAxLjEyMkwxMy4xMzg3IDIuNjI5M0wxNy44NDEzIDQuNTc4MThMMTguNDY2IDMuMDcwODdMMTMuNzYzMyAxLjEyMloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xOC4wNDAzIDUuMDY3MzRMMTIuNjUxNCAyLjgzMjE2TDEzLjU2IDAuNjM2NzhMMTguOTQ5IDIuODcxOTZMMTguMDQwMyA1LjA2NzM0Wk0xMy42MjMgMi40MzA4OUwxNy42MzkxIDQuMDg5MDRMMTcuOTcwNyAzLjI2OTkxTDEzLjk1OCAxLjYxMTc3TDEzLjYyMyAyLjQzMDg5WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEzLjc1MzMgMS4xMDM1NUwxMy4xMTcyIDIuNjM4NDNMMTcuODQ0NCA0LjU5NzQ2TDE4LjQ4MDUgMy4wNjI1OEwxMy43NTMzIDEuMTAzNTVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTguMDQ3MyA1LjA4Mzk3TDEyLjYzMTggMi44Mzg4NEwxMy41NTM4IDAuNjIwMjM5TDE4Ljk2OTMgMi44NjIwNUwxOC4wNDczIDUuMDgzOTdaTTEzLjU5NjkgMi40Mzc1N0wxNy42NDYxIDQuMTEyMjlMMTcuOTk3NiAzLjI2NjY0TDEzLjk1NSAxLjYwODQ5TDEzLjU5NjkgMi40Mzc1N1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xOC4xMDM2IDUuMjE2NThMMTIuNDk5IDIuODk1MThMMTMuNDkzOSAwLjQ4NzU0OUwxOS4wOTg0IDIuODA4OTVMMTguMTAzNiA1LjIxNjU4Wk0xMy43MzYgMi4zODExNUwxNy41NzYzIDMuOTc5NkwxNy44NTE1IDMuMzE2MzVMMTQuMDExMyAxLjcyNDUzTDEzLjczNiAyLjM4MTE1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE4LjMwMjkgNS43MDQwMkwxMi4wMDIgMy4wOTc0MkwxMy4yOTg2IDBMMTkuNTk5NiAyLjYwNjZMMTguMzAyOSA1LjcwNDAyWk0xMi45OTY4IDIuNjkyODNMMTcuOTA4MyA0LjczMjM1TDE4LjYyMTMgMy4wMTExOUwxMy42OTk5IDAuOTcxNjczTDEyLjk5NjggMi42OTI4M1pNMTcuODAyMSA0LjQ2NzA0TDEzLjI2NTUgMi41ODMzOUwxMy44MjI2IDEuMjM2OThMMTguMzY1OSAzLjEyMDYzTDE3LjgwMjEgNC40NjcwNFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xNy41NjI3IDIwLjA0MDNMMTMuNzM1NCAyMS42MjRMMTMuOTk2NiAyMi4yNTUzTDE3LjgyMzkgMjAuNjcxNUwxNy41NjI3IDIwLjA0MDNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTcuNzY1OCAxOS41NDg3TDEzLjI0OSAyMS40MTc3TDEzLjc5NTUgMjIuNzM4NEwxOC4zMTIzIDIwLjg2OTRMMTcuNzY1OCAxOS41NDg3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE3LjgyMTIgMTkuNDIxOEwxMy4xMTcyIDIxLjM2NzRMMTMuNzQwOCAyMi44NzUyTDE4LjQ0NDggMjAuOTI5NkwxNy44MjEyIDE5LjQyMThaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTMuNTM5OSAyMy4zNjAxTDEyLjYyNzkgMjEuMTY0N0wxOC4wMjAyIDE4LjkzNjFMMTguOTI4OSAyMS4xMzE1TDEzLjUzOTkgMjMuMzYwMVpNMTMuNTk2MyAyMS41NTZMMTMuOTI3OSAyMi4zNzUxTDE3Ljk0MzkgMjAuNzE3TDE3LjYxMjMgMTkuODk3OUwxMy41OTYzIDIxLjU1NloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xNy44MjY4IDE5LjQwMzZMMTMuMDk4NiAyMS4zNjAyTDEzLjczMzkgMjIuODk1NEwxOC40NjIxIDIwLjkzODhMMTcuODI2OCAxOS40MDM2WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEzLjUzMDEgMjMuMzc5OUwxMi42MDE2IDIxLjE1NzlMMTguMDI3IDE4LjkwMjlMMTguOTQ4OSAyMS4xMjQ4TDEzLjUzMDEgMjMuMzc5OVpNMTMuNTk2NCAyMS41NTU5TDEzLjkyODEgMjIuNDA4MkwxNy45NjczIDIwLjc1TDE3LjYyNTcgMTkuODk3N0wxMy41OTY0IDIxLjU1NTlaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTguMDg0IDE4Ljc4MzRMMTkuMDc4OSAyMS4xOTExTDEzLjQ3NDQgMjMuNTEyNUwxMi40Nzk1IDIxLjEwMTVMMTguMDg0IDE4Ljc4MzRaTTE3Ljg0MTkgMjAuNjgwNEwxNy41NyAyMC4wMTcxTDEzLjcxNjUgMjEuNjE1NkwxMy45ODg0IDIyLjI3ODhMMTcuODQxOSAyMC42ODA0WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEzLjI2NTYgMjMuOTk2N0wxMS45OTIyIDIwLjg5MjdMMTguMjkzMSAxOC4yODYxTDE5LjU2NjYgMjEuMzkzNEwxMy4yNjU2IDIzLjk5NjdaTTEyLjk1NzIgMjEuMzAzOUwxMy42NzAyIDIzLjAyNTFMMTguNTk0OSAyMC45OTIyTDE3Ljg4MTkgMTkuMjcxTDEyLjk1NzIgMjEuMzAzOVpNMTMuNzc5NyAyMi43NTk3TDEzLjIzMjUgMjEuNDEzM0wxNy43NzI1IDE5LjUzM0wxOC4zMjk2IDIwLjg5MjdMMTMuNzc5NyAyMi43NTk3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIxLjYxOSAxMy43NTA0TDIwLjAzMzIgMTcuNTc2OUwyMC42NjQzIDE3LjgzODRMMjIuMjUwMSAxNC4wMTJMMjEuNjE5IDEzLjc1MDRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjEuNDE5MyAxMy4yNjU1TDE5LjU0NzkgMTcuNzgxM0wyMC44NjgzIDE4LjMyODVMMjIuNzM5NyAxMy44MTI3TDIxLjQxOTMgMTMuMjY1NVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yMS4zNjIgMTMuMTMxTDE5LjQxMzEgMTcuODMzN0wyMC45MjA0IDE4LjQ1ODRMMjIuODY5MyAxMy43NTU3TDIxLjM2MiAxMy4xMzFaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjEuMTI1MSAxOC45NDZMMTguOTI5NyAxOC4wMzczTDIxLjE2MTYgMTIuNjQ4M0wyMy4zNTY5IDEzLjU1N0wyMS4xMjUxIDE4Ljk0NlpNMTkuOTAxNCAxNy42MTk0TDIwLjcyMDUgMTcuOTUxMUwyMi4zNzg2IDEzLjkzNUwyMS41NTk1IDEzLjYwMzRMMTkuOTAxNCAxNy42MTk0WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIxLjM1NDUgMTMuMTEzNkwxOS4zOTU1IDE3Ljg0MDhMMjAuOTMwNCAxOC40NzY4TDIyLjg4OTQgMTMuNzQ5N0wyMS4zNTQ1IDEzLjExMzZaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjEuMTMwOSAxOC45NjU5TDE4LjkwMjMgMTguMDQ0TDIxLjE0NzUgMTIuNjI4NUwyMy4zNjk0IDEzLjU1MDRMMjEuMTMwOSAxOC45NjU5Wk0xOS44OTcyIDE3LjY0MjdMMjAuNzQyOSAxNy45NzQ0TDIyLjQwMSAxMy45MzUxTDIxLjU1NTQgMTMuNTk2OUwxOS44OTcyIDE3LjY0MjdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjEuMDk4NCAxMi40OTU4TDIzLjUwOTMgMTMuNDkwN0wyMS4xODc5IDE5LjA5MTlMMTguNzgwMyAxOC4wOTdMMjEuMDk4NCAxMi40OTU4Wk0yMi4yNjkgMTQuMDA0N0wyMS42MDU4IDEzLjczMjhMMjAuMDEzOSAxNy41NzY0TDIwLjY3NzIgMTcuODQ4M0wyMi4yNjkgMTQuMDA0N1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yMS4zODY1IDE5LjU4MjhMMTguMjg5MSAxOC4yOTk0TDIwLjg5OSAxMS45OTg0TDIzLjk5MzEgMTMuMjgxOEwyMS4zODY1IDE5LjU4MjhaTTE5LjI2NDEgMTcuOTA4MUwyMC45ODUyIDE4LjYyMTFMMjMuMDIxNCAxMy42OTY0TDIxLjMwMDMgMTIuOTgzNEwxOS4yNjQxIDE3LjkwODFaTTIwLjg5MjQgMTguMzQ1OEwxOS41NDU5IDE3Ljc4ODdMMjEuNDI2MyAxMy4yNDU0TDIyLjc3MjcgMTMuODA1OEwyMC44OTI0IDE4LjM0NThaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMi4zNzQzNiAxMy43MjU1TDEuNzQzMTYgMTMuOTg2OEwzLjMyNzU5IDE3LjgxMzlMMy45NTg3OSAxNy41NTI2TDIuMzc0MzYgMTMuNzI1NVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yLjU3NTUgMTMuMjQyNEwxLjI1NDg4IDEzLjc4OTJMMy4xMjQ3MyAxOC4zMDU2TDQuNDQ1MzUgMTcuNzU4OUwyLjU3NTUgMTMuMjQyNFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yLjYzMTU1IDEzLjEwNjFMMS4xMjQwMiAxMy43MzAyTDMuMDcxMjYgMTguNDMzNkw0LjU3ODc4IDE3LjgwOTVMMi42MzE1NSAxMy4xMDYxWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIuODY4NTggMTguOTE5NEwwLjYzNjcxOSAxMy41MzA1TDIuODMyMSAxMi42MjE4TDUuMDYzOTcgMTguMDEwOEwyLjg2ODU4IDE4LjkxOTRaTTEuNjA4MzkgMTMuOTI4NEwzLjI2NjU0IDE3Ljk0NDRMNC4wODg5OCAxNy42MTI4TDIuNDMwODMgMTMuNTk2OEwxLjYwODM5IDEzLjkyODRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMi42NDE1NSAxMy4wODc0TDEuMTA2NDUgMTMuNzIzTDMuMDYzODMgMTguNDUwOUw0LjU5ODkzIDE3LjgxNTNMMi42NDE1NSAxMy4wODc0WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIuODYxOTMgMTguOTM5NEwwLjYyMDExNyAxMy41MjA2TDIuODM4NzIgMTIuNjAyTDUuMDgzODUgMTguMDE3NUwyLjg2MTkzIDE4LjkzOTRaTTEuNTkxNzkgMTMuOTI4NUwzLjI0OTk0IDE3Ljk2NzdMNC4wOTU1OSAxNy42MTk1TDIuNDM3NDQgMTMuNTc2OUwxLjU5MTc5IDEzLjkyODVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMi44OTQ5MyAxMi40NjkzTDUuMjE2MzQgMTguMDczOEwyLjgwODcxIDE5LjA2ODdMMC40ODczMDUgMTMuNDY0MkwyLjg5NDkzIDEyLjQ2OTNaTTMuOTc5MzYgMTcuNTc2NEwyLjM4MDkxIDEzLjcwNjJMMS43MTc2NSAxMy45NzgyTDMuMzE2MSAxNy44MzVMMy45NzkzNiAxNy41NzY0WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIuNjAzMjkgMTkuNTY2MUwwIDEzLjI2NTFMMy4wOTc0MiAxMS45ODE3TDUuNzAwNyAxOC4yODI3TDIuNjAzMjkgMTkuNTY2MVpNMC45NzE2NzMgMTMuNjY5N0wzLjAwNzg4IDE4LjU3MTJMNC43MjkwMyAxNy44NTgyTDIuNjkyODMgMTIuOTU2N0wwLjk3MTY3MyAxMy42Njk3Wk0zLjExNzMxIDE4LjMxMjVMMS4yMzY5OCAxMy43NzkxTDIuNTgzMzkgMTMuMjIyTDQuNDYzNzMgMTcuNzYyTDMuMTE3MzEgMTguMzEyNVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik02LjQwOTk4IDIwLjAzNzdMNi4xNDg0NCAyMC42Njg4TDkuOTc0OTEgMjIuMjU0NUwxMC4yMzY1IDIxLjYyMzRMNi40MDk5OCAyMC4wMzc3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTYuMjEwMjkgMTkuNTQ5M0w1LjY2MzA5IDIwLjg2OTdMMTAuMTc4OSAyMi43NDExTDEwLjcyNjEgMjEuNDIwN0w2LjIxMDI5IDE5LjU0OTNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNi4xNTQ5MyAxOS40MTQ4TDUuNTMwMjcgMjAuOTIyMUwxMC4yMzI5IDIyLjg3MUwxMC44NTc2IDIxLjM2MzdMNi4xNTQ5MyAxOS40MTQ4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEwLjQzMjkgMjMuMzU5OUw1LjA0Mzk1IDIxLjEyODFMNS45NjkxOSAxOC45MzI3TDExLjM0MTYgMjEuMTY0NUwxMC40MzI5IDIzLjM1OTlaTTYuMDE1NjIgMjAuNzIzNUwxMC4wMzE2IDIyLjM4MTZMMTAuMzYzMyAyMS41NjI1TDYuMzUwNTYgMTkuOTA0NEw2LjAxNTYyIDIwLjcyMzVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNi4xNDc4IDE5LjM5NzRMNS41MTE3MiAyMC45MzIzTDEwLjIzODkgMjIuODkxM0wxMC44NzUgMjEuMzU2NEw2LjE0NzggMTkuMzk3NFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMC40Mzk5IDIzLjM3OTlMNS4wMjQ0MSAyMS4xMzQ3TDUuOTQ2MzQgMTguOTAyOUwxMS4zNjE4IDIxLjE1NzlMMTAuNDM5OSAyMy4zNzk5Wk01Ljk5OTQgMjAuNzI2OEwxMC4wMzg2IDIyLjM4NUwxMC4zOTAyIDIxLjU1NTlMNi4zNDc2MSAxOS44OTc3TDUuOTk5NCAyMC43MjY4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTUuODg5NDIgMTguNzgwMkwxMS40OTQgMjEuMTAxNkwxMC40OTkxIDIzLjUwOTJMNC44OTQ1MyAyMS4xODc4TDUuODg5NDIgMTguNzgwMlpNMTAuMjU3IDIxLjYxNTZMNi40MDM0NCAyMC4wMTcxTDYuMTI4MTkgMjAuNjgwNEw5Ljk4MTcyIDIyLjI3NTVMMTAuMjU3IDIxLjYxNTZaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTAuNjk4NCAyMy45OTk5TDQuMzk3NDYgMjEuMzlMNS42ODA4NyAxOC4yOTU5TDExLjk4MTggMjAuOTAyNUwxMC42OTg0IDIzLjk5OTlaTTUuMzkyMzUgMjAuOTg4N0wxMC4yODA2IDIzLjAyNDlMMTAuOTkzNiAyMS4zMDM4TDYuMDkyMDkgMTkuMjY3Nkw1LjM5MjM1IDIwLjk4ODdaTTEwLjE5NzcgMjIuNzU5Nkw1LjYzNzc1IDIwLjg5MjZMNi4yMDE1MiAxOS41MzI5TDEwLjc0MTUgMjEuNDEzMkwxMC4xOTc3IDIyLjc1OTZaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K',
	adapter: () => new OneGateWalletAdapter(config),
});
