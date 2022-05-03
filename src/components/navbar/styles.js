import styled from 'styled-components'

export const StyledNav = styled.nav`
  width: 100%;
  padding: 5px;
  background-color: ${props => props.theme.PrimaryColor};
`
export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledHeader = styled.div`
  padding: 5px;
  background-color: ${props => props.theme.PrimaryColor};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 1.95px;
  color: ${props => props.theme.LightColor}; 
`

export const StyledUL = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px;
`

export const StyledLink = styled.a`
  color: ${props => props.theme.LightColor};
  text-decoration: none;
`