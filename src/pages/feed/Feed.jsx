import React from 'react';
import { StyledFeed } from './style'
import { logout, reset } from '../../features/user/userSlices'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Feed() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    return (
        <StyledFeed>
            Hello Feed!
            <button onClick={handleLogout}>Signout</button>
        </StyledFeed>
    );
}

export default Feed;