
import {Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL} from "@solana/web3.js"

const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed")
const publicKey = new PublicKey('86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY')
if(!PublicKey.isOnCurve(publicKey.toBuffer())){
  throw new Error("Provide a public key to check the balance of!");
}
const balance =  await connection.getBalance(publicKey)
const balanceInSol =  balance / LAMPORTS_PER_SOL




console.log(`The balance of the account at ${publicKey} is ${balanceInSol} SOL`); 
console.log(`✅ Finished!`)
