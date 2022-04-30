import axios from 'axios'
const { REACT_APP_URL_PATH } = process.env

function onLogin(formData) {
    return axios.post(`${REACT_APP_URL_PATH}/api/auth`, formData, {
        headers: {
            'content-type': 'application/json'
        }
    }).then((response) => {
        localStorage.setItem('jwt', JSON.stringify(response.data.token))
        return response.data
    })
}

export const AuthService = {
    onLogin
}