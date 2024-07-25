import {
  Connection,
  Keypair,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import walletKey from "./wallet.json" assert { type: "json" };
import { airdropYourAccount } from "./airdrop.mjs";

const to = new PublicKey("D5EcfvzUYRMfgb99gQ6ipTXJRWMPZxyJM4u9f1LG7Lt");
const from = Keypair.fromSecretKey(new Uint8Array(walletKey));

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
console.log({ to, from });

const transfer = async () => {
  const balance = await connection.getBalance(from.publicKey);
  console.log({ balance });

  let canAirDropBalance = false;
  if (balance === 0) {
    console.log(`OGA YOU DON'T HAVE MONEY!!!`);
    canAirDropBalance = await airdropYourAccount();
    if (!canAirDropBalance) return;
  } 
  
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: from.publicKey,
      toPubkey: to,
      lamports: balance,
    }),
  );

  transaction.feePayer = from.publicKey;

  const recentBlockhash = await connection.getLatestBlockhash("confirmed");
  transaction.recentBlockhash = recentBlockhash.blockhash;

  const fee =
    (
      await connection.getFeeForMessage(
        transaction.compileMessage(),
        "confirmed",
      )
    ).value || 0;

  transaction.instructions.pop();

  transaction.add(
    SystemProgram.transfer({
      fromPubkey: from.publicKey,
      toPubkey: to,
      lamports: balance * 0.1 - fee,
    }),
  );

  const send = await sendAndConfirmTransaction(connection, transaction, [
    from,
  ]);

  console.log({ send });
};

transfer();
