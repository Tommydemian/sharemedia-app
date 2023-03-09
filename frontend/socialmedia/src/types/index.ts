export type sanityDoc = {
  _id: string, // sanity default
  _type: 'user', //sanity required
  username: string, 
  image: string,
}
  
export type decoded = {
  aud: string
  azp: string
  email: string
  email_verified: boolean
  exp: number
  family_name: string
  given_name: string
  iat: number
  iss: string
  jti: string
  name: string
  nbf: number
  picture: string
  sub: string
  }