import axios from 'axios'
const { REACT_APP_URL_PATH } = process.env

const configOptions = { headers: { 'content-type': 'application/json' } }

async function onLogin(credentials) {
    const response = await axios.post(`${REACT_APP_URL_PATH}/api/auth`, credentials, configOptions)
    localStorage.setItem('jwt', JSON.stringify(response.data.token))
    return response.data
}

function onLogout() {
    localStorage.removeItem('jwt')
}

async function onSignup(credentials) {
    const response = await axios.post(`${REACT_APP_URL_PATH}/api/user`, credentials, configOptions)
    return response.data
}

export const AuthService = {
    onLogin,
    onLogout,
    onSignup
}