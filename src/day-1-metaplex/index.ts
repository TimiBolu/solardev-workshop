import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { generateSigner, percentAmount } from "@metaplex-foundation/umi";
import {
    createV1,
    TokenStandard,
  } from '@metaplex-foundation/mpl-token-metadata';



const umi = createUmi("https://api.devnet.solana.com");
const secretArray = [
    157,  20, 216,  67,  81, 101,  73, 167,  91,  96, 226,
    152, 211,  38,  57, 135,  70,  52, 107,   8, 207, 201,
    152,  29, 124, 253,  33,  84, 195, 206, 203, 193, 221,
     58,  19, 180, 155, 225, 201, 252, 106, 143, 226, 119,
     86, 211, 117, 234, 150,  42,  77,  76, 165,  34, 203,
    175,  70, 145,  55, 172,   9,   3, 167,  60
  ];
const secret = new Uint8Array(secretArray);
const keypair = umi.eddsa.createKeypairFromSecretKey(secret);

const signer = generateSigner(umi);


console.log({skey: signer.secretKey});

// const mint = generateSigner(umi);

// console.log({mint: mint.publicKey});
// (async () => {
//     const sig = await createV1(
//         umi,
//         {
//             mint,
//             authority: umi.identity,
//             name: "SLD",
//             uri: "www.google.com",
//             sellerFeeBasisPoints: percentAmount(3.5),
//             tokenStandard: TokenStandard.FungibleAsset,
//         }
//     ).sendAndConfirm(umi);

//     console.log({sig});
// })();
