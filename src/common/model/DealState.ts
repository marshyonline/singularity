/**
 * Represents one deal sent out by this system
 */
export default interface DealState {
  id: string,
  client: string,
  provider: string,
  dealCid: string,
  dataCid: string,
  pieceCid: string,
  expiration: number,
  duration: number,
  price: number, // unit is Fil
  verified: boolean,
  state: 'reserved' | 'proposed' | 'published' | 'active' | 'slashed' | 'error',
  replicationRequestId: string,
  datasetId: string,
  dealId: number, // use 0 to represent unknown,
  errorMessage?: string// any useful info returned by boost / lotus
}
