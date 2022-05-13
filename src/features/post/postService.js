import axios from 'axios'
const { REACT_APP_URL_PATH } = process.env

const getAllPosts = async () => {
    const response = await axios.get(`${REACT_APP_URL_PATH}/api/post`)
    return response.data
}

const deletePost = async (id, token) => {
    const response = await axios.delete(`${REACT_APP_URL_PATH}/api/post/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return response.data
}

const PostService = {
    getAllPosts,
    deletePost
}

export default PostService