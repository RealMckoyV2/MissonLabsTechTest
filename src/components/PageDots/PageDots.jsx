import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DotContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50px;
  background-color: ${(props) => props.active ? 'green' : 'darkgrey'};
  margin: 5px;
`

const PageDots = ({ currentPage, numOfPages }) => {
  const dots = []
  for (let i = 0; i < numOfPages; i++) {
    if (currentPage === i) {
      dots.push(<Dot key={i} active/>)
    } else {
      dots.push(<Dot key={i}/>)
    }
  }

  return (
    <DotContainer>
      {dots}
    </DotContainer>
  )
}

PageDots.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numOfPages: PropTypes.number.isRequired,
}

export default PageDots
