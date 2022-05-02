import React from 'react'
import styled from 'styled-components'

const StyledAlertDanger = styled.div`
  background-color: #f8d7da;
  border: solid 1px #f5c2c7;
  color: #842029;
  padding: 10px;
`
const StyledAlertSuccess = styled.div`
  background-color: #d1e7dd;
  border: solid 1px #badbcc;
  color: #0f5132;
  padding: 10px;
`

const Notification = ({ message, error }) => {
    if(error) {
        return (
            <StyledAlertDanger role="alert">{message}</StyledAlertDanger>
        )
    } else {
        return (
            <StyledAlertSuccess role="alert">{message}</StyledAlertSuccess>
        )
    }
}

export default Notification