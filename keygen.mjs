import { Keypair } from "@solana/web3.js";

const wallet = Keypair.generate();
const generateKey = () => {
  const publicKey = wallet.publicKey.toString();
  const privateKey = wallet.secretKey;
  console.log({ privateKey, publicKey });
  return { publicKey, privateKey };
};

export { wallet, generateKey };
generateKey();
