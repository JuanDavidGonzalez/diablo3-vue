// Traemos el metodo post de axios
import { post } from 'axios'

// Credenciales de nuestra cuenta de blizard
const clientID = 'df30f0d9eed24d04bc15480e1af333e1'
const clientSecret = '84EgZF1SHFcFD7PfD9RFVgbQGZ1bui5t'

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
