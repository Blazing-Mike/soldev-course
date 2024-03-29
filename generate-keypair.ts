
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import "dotenv/config"
const keypair = getKeypairFromEnvironment("SECRET_KEY")

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);

console.log(keypair.publicKey.toBase58())