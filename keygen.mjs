import { Keypair } from "@solana/web3.js";

const generateKey = () => {
  const wallet = Keypair.generate();
  const publicKey = wallet.publicKey.toString();
  const privateKey = wallet.secretKey;
  return { publicKey, privateKey };
};

export { generateKey };
