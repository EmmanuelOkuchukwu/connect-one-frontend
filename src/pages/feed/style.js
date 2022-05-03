import styled from 'styled-components'

export const StyledFeed = styled.main`
`

export const StyledMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

export const StyledAside = styled.div`
  width: 15%;
  height: 100vh;
  background-color: ${props => props.theme.PrimaryColor};
  border-top: 1px solid ${props => props.theme.LightColor};
`

export const StyledMain = styled.div`
  width: 50%;
  // background-color: ${props => props.theme.PrimaryColor};
  height: 100%;
`

export const StyledAside2 = styled.div`
  width: 15%;
  background-color: ${props => props.theme.PrimaryColor};
  height: 100vh;
  border-top: 1px solid ${props => props.theme.LightColor};
`

export const StyledForm = styled.form`
  width: 100%;
  background-color: ${props => props.theme.PrimaryColor};
  height: 200px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  .form-header {
    display: flex;
    gap: 15px;
    padding: 30px 50px;
  }
  .post-textarea {
    width: 100%;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 1.95px;
  }
  .btn-container {
    display: flex;
    gap: 5px;
    padding: 0 50px;
    float: right;
    width: 100%;
  }
  .btn-post {
    background-color: ${props => props.theme.LightColor};
    padding: 7px 25px;
    border: none;
    color: ${props => props.theme.PrimaryColor};
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`