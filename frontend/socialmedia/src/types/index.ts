export type SanityDoc = {
  _id: string, // sanity default
  _type: 'user', //sanity required
  username: string, 
  image: string,
}
  
export type Decoded = {
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

  export type User = {
    image: string
    username: string
    _createdAt:  string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
  }