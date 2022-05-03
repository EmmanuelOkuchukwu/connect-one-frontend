import axios from 'axios'
const { REACT_APP_URL_PATH } = process.env

const getAllPosts = async () => {
    const response = await axios.get(`${REACT_APP_URL_PATH}/api/post`)
    return response.data
}

const PostService = {
    getAllPosts
}

export default PostService