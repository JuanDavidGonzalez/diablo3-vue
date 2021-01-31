// Traemos el metodo post de axios
import { post } from 'axios'

// Credenciales de nuestra cuenta de blizard
const clientID = process.env.VUE_APP_CLIENT_ID
const clientSecret = process.env.VUE_APP_CLIENT_SECRET

// API URL para hacer oauth
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()
  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-type': 'multipart/form-data' },
    auth: { username: clientID, password: clientSecret }
  }

  return post(API_URL, body, config)
}

export { getToken }
