import React, { useEffect } from 'react';
import { StyledFeed, StyledMainContainer, StyledAside, StyledMain, StyledAside2, StyledForm } from './style'
import Navbar from '../../components/navbar/Navbar'
import { VscAccount } from 'react-icons/vsc'
import PostCard from '../../components/postCard/PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, reset } from '../../features/post/postSlices'
import { useNavigate } from 'react-router-dom'

function Feed() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { posts, loading } = useSelector(state => state.post)
    const { user } = useSelector(state => state.user)
    useEffect(() => {
        // if(!user) {
        //     navigate('/')
        // }
        dispatch(getPosts())

        return () => {
            dispatch(reset())
        }
    }, [dispatch, user])

    return (
        <StyledFeed>
            <Navbar />
            <StyledMainContainer>
                <StyledAside></StyledAside>
                <StyledMain>
                    <br />
                    <StyledForm>
                        <div className="form-header">
                            <VscAccount size={40} cursor='pointer' />
                            <textarea name="content" cols="20" rows="5" className="post-textarea" placeholder="What’s on your Mind?" />
                        </div>
                        <div className="btn-container">
                            <input type="submit" value="Post" className="btn-post" />
                            <input type="file" />
                        </div>
                    </StyledForm>
                    {!loading ?
                        <div>
                            {posts?.length > 0 ? posts?.map(post => (
                                <PostCard post={post} key={post.id} />
                            )): <p>No Posts found in feed</p>}
                        </div> : <p>Posts are loading...</p>
                    }

                </StyledMain>
                <StyledAside2></StyledAside2>
            </StyledMainContainer>
        </StyledFeed>
    )
}

export default Feed