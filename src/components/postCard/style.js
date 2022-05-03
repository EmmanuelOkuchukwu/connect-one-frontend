import styled from 'styled-components'

export const StyledPostCard = styled.main`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.PrimaryColor};
  margin: 10px 0;
  padding: 20px 50px;
  border-radius: 5px;
`

export const StyledPostCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .user-display {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`

export const StyledPostCardBody = styled.div`
  .img-container {
    width: 100%;
    height: 100%;
  }
  .post-img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`

export const StyledPostCardFooter = styled.div`
  .user-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .star-comment {
    display: flex;
    gap: 5px;
    align-items: center;
  }
`