import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AuthService } from './authService'

const user = JSON.parse(localStorage.getItem('jwt'))

export const login = createAsyncThunk('user/auth', async (credentials, thunkAPI) => {
    try {
        return await AuthService.onLogin(credentials)
    } catch(err) {
        const message = (err.response && err.response.data && err.response.data.msg) || err.msg || err.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const logout = createAsyncThunk('user/logout', async () => {
    await AuthService.onLogout()
})

export const signup = createAsyncThunk('user/signup', async (credentials, thunkAPI) => {
    try {
        await AuthService.onSignup(credentials)
    } catch(err) {
        const message = (err.response && err.response.data && err.response.data.msg) || err.msg || err.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const initialState = {
    user: user ? user :
        null,
    message: '',
    success: false,
    loading: false,
    error: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = state.loading = false
            state.message = state.message = ''
            state.success = state.success = false
            state.error = state.error = false
            state.user = state.user = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.success = true
                state.error = false
                state.message = 'Successfully Signed In'
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                state.error = true
                state.message = action.payload
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
            .addCase(signup.pending, (state) => {
                state.loading = true
            })
            .addCase(signup.fulfilled, (state) => {
                state.error = false
                state.message = 'Successfully Joined App!'
                state.loading = false
                state.success = true
            })
            .addCase(signup.rejected, (state, action) => {
                state.error = true
                state.message = action.payload
                state.loading = false
            })
    }
})

export const { reset } = userSlice.actions
export default userSlice.reducer
