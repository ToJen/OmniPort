// import { Connect } from 'uport-connect'

// export let uport = new Connect('TruffleBox')
// export const web3 = uport.getWeb3()


import { Connect, SimpleSigner } from 'uport-connect'

export const uport = new Connect('OmniPort', {
  clientId: '2p1G3gh8jdkPAdGGMr7Un9zBJdLvs2ZQrgQ',
  network: 'rinkeby',
  signer: SimpleSigner('9cd6bcb4398975b73edb8e9af716924779bdf45a3036e34cd228979a6135d68a')
})
export const web3 = uport.getWeb3()

// // Request credentials to login
// uport.requestCredentials({
//   requested: ['name', 'phone', 'country'],
//   notifications: true // We want this if we want to recieve credentials
// })
// .then((credentials) => {
//   // Do something
// })

// // Attest specific credentials
// uport.attestCredentials({
//   sub: THE_RECEIVING_UPORT_ADDRESS,
//   claim: {
//     CREDENTIAL_NAME: CREDENTIAL_VALUE
//   },
//   exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
// })
