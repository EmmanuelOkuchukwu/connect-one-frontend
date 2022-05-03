import React from 'react';
import { StyledNav, StyledWrapper, StyledUL, StyledLink, StyledHeader } from './styles'
import { VscHome, VscSignOut, VscAccount } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout, reset } from '../../features/user/userSlices'

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    return (
        <StyledNav>
            <StyledWrapper>
                <StyledHeader>
                    <h2>Connect One</h2>
                </StyledHeader>
                <StyledUL>
                    <li><StyledLink><VscHome size={20} cursor='pointer' /></StyledLink></li>
                    <li><StyledLink><VscAccount size={20} cursor='pointer' /></StyledLink></li>
                    <li><StyledLink onClick={handleLogout}><VscSignOut size={20} cursor='pointer' /></StyledLink></li>
                </StyledUL>
            </StyledWrapper>
        </StyledNav>
    );
}

export default Navbar;