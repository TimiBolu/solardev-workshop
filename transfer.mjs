import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import walletKey from "./wallet.json" assert { type: "json" };

const toWallet = new PublicKey("D5EcfvzUYRMfgb99gQ6ipTXJRWMPZxyJM4u9f1LG7Lt");
const fromWallet = Keypair.fromSecretKey(new Uint8Array(walletKey));

console.log({ toWallet, fromWallet });

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const transfer = async () => {
  const balance = connection.getBalance(fromWallet.publicKey);
};
