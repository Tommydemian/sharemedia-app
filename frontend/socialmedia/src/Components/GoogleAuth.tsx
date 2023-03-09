import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

import { client } from '../client'; 

import { decoded, sanityDoc } from '../types'

const googleOAuth = () => {

  const navigate = useNavigate();

return (
<GoogleLogin
onSuccess={(credentialResponse) => {
  let decoded: decoded = {
    aud: "",
    azp: "",
    email: "",
    email_verified: false,
    exp: 0,
    family_name: "",
    given_name: "",
    iat: 0,
    iss: "",
    jti: "",
    name: "",
    nbf: 0,
    picture: "",
    sub: "",
  };
  if (credentialResponse.credential){
      decoded = jwt_decode(credentialResponse?.credential);
    }
    localStorage.setItem('user', JSON.stringify(decoded))

    const { name, picture, aud } = decoded 

    const doc: sanityDoc = {
      _id: aud, 
      _type: 'user',
      username: name, 
      image: picture,
    }

    client.createIfNotExists(doc)
    .then(() => {
      navigate('/', { replace: true })
    })
    
}}
onError={() => {
  console.log('Login Failed');
}}
/>
    )
}

export default googleOAuth
