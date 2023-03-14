import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';


import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider
       clientId="412099578092-m51o8u3m7flf7jfqdjcosb54ac3e36v2.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
