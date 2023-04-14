
# Nautilus Wallet Decrypter 

Recover mnemonic with the encrypted string and password!

## Usage

`git clone https://github.com/mgpai22/nautilus-ergo-wallet-decrypter.git`

`cd nautilus-ergo-wallet-decrypter`

- get [node](https://nodejs.org/en/download)

`npm install`

- copy `.env.example` to `.env`
- fill in `.env`
    - inspect element on top of nautilus extension
    - Application > IndexedDB > nautilusDB > wallets > value > mnemonic
        - copy this string which will be the `ENCRYPTED_MNEMONIC`

- `node main.js`
