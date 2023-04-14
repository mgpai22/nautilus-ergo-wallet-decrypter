import dotenv from 'dotenv';
import AES from "crypto-js/aes.js";
import CryptoJS from "crypto-js";
dotenv.config();

const encryptedMnemonic = process.env.ENCRYPTED_MNEMONIC;
const walletPw = process.env.WALLET_PW;


const decryptionResult = AES.decrypt(encryptedMnemonic, walletPw);

const decryptedMnemonic = CryptoJS.enc.Utf8.stringify(decryptionResult);

if(decryptedMnemonic === ""){
    console.log("decryption failed")
} else {
    console.log('decryptedMnemonic:', decryptedMnemonic);
}