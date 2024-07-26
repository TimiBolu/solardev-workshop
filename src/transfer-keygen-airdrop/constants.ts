import { PublicKey } from "@solana/web3.js";
import walletKey from "wallet.json";


const KRecipientPublicKeyRaw = "D5EcfvzUYRMfgb99gQ6ipTXJRWMPZxyJM4u9f1LG7Lt";
const KRecipientPublicKey = new PublicKey(KRecipientPublicKeyRaw);
const KWalletKeyRaw = walletKey;
const KWalletKey = new Uint8Array(KWalletKeyRaw);

export {
    KRecipientPublicKey,
    KWalletKey,
};
