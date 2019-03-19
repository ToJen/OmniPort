import { Connect, SimpleSigner } from 'uport-connect'

const UPORT_CLIENT_ID = process.env.UPORT_CLIENT_ID;
const UPORT_NETWORK = process.env.UPORT_NETWORK;
const UPORT_SIGNER = process.env.UPORT_SIGNER;

export const uport = new Connect('OmniPort', {
  clientId: UPORT_CLIENT_ID,
  network: UPORT_NETWORK,
  signer: SimpleSigner(UPORT_SIGNER)
})
export const web3 = uport.getWeb3()
