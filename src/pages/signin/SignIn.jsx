import React, { useState, useEffect } from 'react'
import {
    StyledLogin,
    StyledContainer,
    StyledForm,
    StyledButton,
    StyledInput,
    StyledHeader
} from './style'
import { HiOutlineLogin } from 'react-icons/hi'
import { login, reset } from '../../features/user/userSlices'
import { useDispatch, useSelector } from 'react-redux'
import Notification from '../../components/notification/Notification'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user, error, message, loading, success } = useSelector(state => state.user)

    const formValue = {
        email: '',
        password: ''
    }
    const [signInForm, setSignInForm] = useState(formValue)
    const { email, password } = signInForm
    const handleChange = (evt) => {
        const { name, value } = evt.target
        setSignInForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleLogin = (evt) => {
        evt.preventDefault()
        dispatch(login({email, password}))
    }

    useEffect(() => {
        if(success || user) {
            navigate('/feed')
        }
        dispatch(reset())
    }, [])

    return (
        <StyledLogin>
            <StyledContainer>
                <StyledForm onSubmit={handleLogin}>
                    <StyledHeader>
                        <HiOutlineLogin color="#6C63FF" size={30} />
                        <h2>Sign In for access</h2>
                    </StyledHeader><br/>
                    {message && <Notification message={message} error={error} />}
                    <StyledInput type="text" name="email" placeholder="Email" value={email} onChange={handleChange} />
                    <StyledInput type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
                    <StyledButton disabled={loading}>{loading ? 'Loading...' : 'Sign In'}</StyledButton>
                    <hr />
                    <h4 style={{ color: '#6C63FF' }}>Join Here</h4>
                    <StyledButton type='submit'>Join Now</StyledButton>
                </StyledForm>
            </StyledContainer>
        </StyledLogin>
    );
}

export default SignIn