import React from 'react'
import styled from 'styled-components'
import './LoadingSpinner.css'

const Spinner = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  /*display: ${props => props.show ? 'flex' : 'none'};*/
  display: flex;

  flex-direction: column;
  justify-content: center;
  transition: opacity 1s;
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  opacity:    ${props => props.show ? 1 : 0 };
`

const LoadingSpinner = (props) => {
  var spinnerDisplay = props.show ? 'block' : 'hidden'

  return (
    <Spinner {...props}>
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    </Spinner>
  )
}

export default LoadingSpinner
