import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { createSignerFromKeypair, generateSigner, percentAmount } from "@metaplex-foundation/umi";
import {
    createV1,
    mintV1,
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
const signer = createSignerFromKeypair(umi, keypair);
// console.log({signer: signer.publicKey});

umi.identity = signer;
umi.payer = signer;

// const mint = generateSigner(umi);
// console.log({mintSecret: mint.secretKey});

let mintSecretArray = [
  246, 249,  72,  87, 142, 112, 194, 115,  78,  39,  95,
   57,  37, 186, 143, 169, 236, 180, 151,  64, 135, 139,
  118, 227,  66, 101, 227,  28, 179,  83, 193, 154, 133,
   99, 219,  15,  93,  50,  82, 206,  26,  11, 151, 210,
   63, 117, 215,  80, 107,  63, 166, 224, 214, 243,  82,
  130,  84, 111,  49, 113, 107, 180,  13,  95
];
let mintSecret = new Uint8Array(mintSecretArray);
let mintkeypair = umi.eddsa.createKeypairFromSecretKey(mintSecret);
const mint = createSignerFromKeypair(umi, mintkeypair);

console.log({mint: mint.publicKey});

const main = async () => {
    console.log("start minting....");

    const assetURL = "https://bafybeigtouebpxhlaps7f3mlvo7lwortfc7umg7dp2q6uut3muiwarslee.ipfs.nftstorage.link/2446.json";

    // create
    // const sig = await createV1(
    //     umi,
    //     {
    //         mint,
    //         authority: umi.identity,
    //         name: "SLD",
    //         uri: assetURL,
    //         sellerFeeBasisPoints: percentAmount(3.5),
    //         tokenStandard: TokenStandard.FungibleAsset,
    //     }
    // ).sendAndConfirm(umi);

    // mint
    const res = await mintV1(umi, {
      mint: mint.publicKey,
      authority: umi.identity,
      amount: 3,
      tokenOwner: mint.publicKey,
      tokenStandard: TokenStandard.FungibleAsset,
    }).sendAndConfirm(umi)

    console.log({res});
};

main().then(
  () => {
    console.log("DONE");
  }
).catch((err) => {
  console.error(err);
})
