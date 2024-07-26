import {
  Connection,
  LAMPORTS_PER_SOL,
  Keypair,
  TransactionConfirmationStrategy,
} from "@solana/web3.js";
import { KWalletKey } from "./constants";

export const airdropYourAccount = async () => {
  const connection = new Connection(
    "https://api.devnet.solana.com",
    "confirmed",
  );

  const publicKey = Keypair.fromSecretKey(KWalletKey).publicKey;
  console.log({ publicKey });
  const signature = await connection.requestAirdrop(
    publicKey,
    LAMPORTS_PER_SOL * 0.3,
  );

  console.log({
    publicKey,
    signature,
  });
  const recentBlockhash = await connection.getLatestBlockhash("confirmed");
  const TransactionConfirmationStrategy = {
    signature,
    blockhash: recentBlockhash.blockhash,
    lastValidBlockHeight: recentBlockhash.lastValidBlockHeight,
  };
  const res = await connection.confirmTransaction(TransactionConfirmationStrategy);
  console.log({
    res,
  });
  return !res.value.err;
};
