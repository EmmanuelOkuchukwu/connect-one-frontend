import React from 'react'
import {
    StyledLogin,
    StyledContainer,
    StyledForm,
    StyledButton,
    StyledInput,
    StyledHeader
} from './style'
import { HiOutlineLogin } from 'react-icons/hi'

function SignIn() {
    return (
        <StyledLogin>
            <StyledContainer>
                <StyledForm>
                    <StyledHeader>
                        <HiOutlineLogin color="#6C63FF" size={30} />
                        <h2>Sign In for access</h2>
                    </StyledHeader><br/>
                    <StyledInput type="text" name="email" placeholder="Email" />
                    <StyledInput type="password" name="password" placeholder="Password" />
                    <StyledButton>Sign In</StyledButton>
                    <hr />
                    <h4 style={{ color: '#6C63FF' }}>Join Here</h4>
                    <StyledButton>Join Now</StyledButton>
                </StyledForm>
            </StyledContainer>
        </StyledLogin>
    );
}

export default SignIn