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
  background-color: darkgrey;
  margin: 5px;
`

const ActiveDot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50px;
  background-color: green;
  margin: 5px;
`

const PageDots = ({ currentPage, numOfPages }) => {
  const dots = []
  for (let i = 0; i < numOfPages; i++) {
    if (currentPage === i) {
      dots.push(<ActiveDot key={i}/>)
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
