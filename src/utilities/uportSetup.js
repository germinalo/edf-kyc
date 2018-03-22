import { Connect, SimpleSigner } from 'uport-connect'

const uport = new Connect('Blockhathon dApp', {
  clientId: '2ovPhyQ6SaK7EmSkj4nhcEG9FFxC4WHwCe8',
  signer: SimpleSigner('80f1e49defe68adea6c4256fb4007e790d0dd08e3481fdae5e6c44b5b78b8c20')
})

const web3 = uport.getWeb3()
export { web3, uport }
