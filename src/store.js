import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlices'

const store = configureStore({
    reducer: {
        user: userReducer,
        devTools: true
    }
})

export default store