import React, { useState } from 'react'
import {
    StyledLogin,
    StyledContainer,
    StyledForm,
    StyledButton,
    StyledInput,
    StyledHeader
} from './style'
import { HiOutlineLogin } from 'react-icons/hi'
import { login } from '../../features/user/userSlices'
import { useDispatch, useSelector } from 'react-redux'

function SignIn() {
    const dispatch = useDispatch()
    const { user, error, message, loading } = useSelector(state => state.user)

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
        console.log(user)
    }

    return (
        <StyledLogin>
            <StyledContainer>
                <StyledForm onSubmit={handleLogin}>
                    <p>{message}</p>
                    <StyledHeader>
                        <HiOutlineLogin color="#6C63FF" size={30} />
                        <h2>Sign In for access</h2>
                    </StyledHeader><br/>
                    <StyledInput type="text" name="email" placeholder="Email" value={email} onChange={handleChange} />
                    <StyledInput type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
                    <StyledButton>Sign In</StyledButton>
                    <hr />
                    <h4 style={{ color: '#6C63FF' }}>Join Here</h4>
                    <StyledButton type='submit'>Join Now</StyledButton>
                </StyledForm>
            </StyledContainer>
        </StyledLogin>
    );
}

export default SignIn