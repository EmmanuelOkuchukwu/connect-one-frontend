import styled from 'styled-components'

export const StyledLogin = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledContainer = styled.div`
  height: 450px;
  width: 390px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  border-radius: 5px;
`

export const StyledForm = styled.form`
  padding: 40px;
  h2 {
    color: ${props => props.theme.PrimaryColor}
  }
`

export const StyledButton = styled.button`
  padding: 10px;
  border: 3px solid ${props => props.theme.PrimaryColor};
  border-radius: 5px;
  background-color: ${props => props.theme.LightColor};
  color: ${props => props.theme.PrimaryColor};
  width: 100%;
  margin: 10px 0;
  cursor: pointer;
  box-shadow: 2px 9px 17px ${props => props.theme.LightGrey};
  &:hover {
    background-color: ${props => props.theme.PrimaryColor};
    color: ${props => props.theme.LightColor};
    transition: all 0.2s ease-in-out;
  }
`

export const StyledInput = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid ${props => props.theme.PrimaryColor};
  border-radius: 5px;
  margin: 10px 0;
`

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: 100%;
`