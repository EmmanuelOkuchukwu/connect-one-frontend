import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import PostService from './postService'

const initialState = {
    posts: [],
    message: '',
    error: false,
    loading: false,
    success: false
}

export const getPosts = createAsyncThunk('post/getAll', async (data, thunkAPI) => {
    try {
        return await PostService.getAllPosts(data)
    } catch(err) {
        const message = (err.response && err.response.data && err.response.data.msg) || err.msg || err.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = state.loading = false
            state.message = state.message = ''
            state.error = state.error = false
            state.posts = state.posts = []
            state.success = state.success = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = false
                state.posts = action.payload
                state.message = 'Posts retrieved successfully!'
                state.success = true
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.loading = false
                state.posts = []
                state.error = true
                state.message = action.payload
            })
    }
})

export const { reset } = postSlice.actions
export default postSlice.reducer