import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlices'
import postReducer from './features/post/postSlices'

const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer,
        devTools: true
    }
})

export default store