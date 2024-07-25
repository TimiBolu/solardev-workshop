import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

import { wallet, generateKey } from "./keygen.mjs";

(async () => {
  const connection = new Connection(
    "https://api.devnet.solana.com",
    "confirmed",
  );
  const publicKey = generateKey().publicKey;
  const myAddress = new PublicKey(publicKey);
  const signature = await connection.requestAirdrop(
    myAddress,
    LAMPORTS_PER_SOL * 0.2,
  );

  console.log({
    publicKey,
    myAddress,
    signature,
  });
  const res = await connection.confirmTransaction(signature);
  console.log({
    res,
  });
})();
