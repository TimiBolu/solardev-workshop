import {
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  Keypair,
} from "@solana/web3.js";
import walletKey from "./wallet.json" assert { type: "json" };

export const airdropYourAccount = async () => {
  const connection = new Connection(
    "https://api.devnet.solana.com",
    "confirmed",
  );

  const myAddress = Keypair.fromSecretKey(new Uint8Array(walletKey)).publicKey;
  console.log({ myAddress });
  const signature = await connection.requestAirdrop(
    myAddress,
    LAMPORTS_PER_SOL * 0.3,
  );

  console.log({
    publicKey: myAddress.publicKey,
    myAddress,
    signature,
  });
  const res = await connection.confirmTransaction(signature);
  console.log({
    res,
  });
  return !!res.value.err;
};
