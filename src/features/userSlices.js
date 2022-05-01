import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from '../services/authService'

const user = JSON.parse(localStorage.getItem('jwt'))

export const login = createAsyncThunk('user/auth', async ({email, password}, thunkAPI) => {
    try {
        const response = await AuthService.onLogin({ email, password })
        return response.data
    } catch(err) {}
})

const initialState = {
    user: user ? user :
        null,
    message: '',
    success: false,
    isLoading: false,
    error: false
}