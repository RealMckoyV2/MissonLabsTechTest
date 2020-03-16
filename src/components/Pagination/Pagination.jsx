import React from 'react'
import styled from 'styled-components'
import PageDots from '../PageDots'
import PageNumber from '../PageNumber'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const ContentContainer = styled.div`
  flex: 1;
`

const Pagination = ({ currentPage, numOfPages }) => (
  <Container>
    <ContentContainer />
    <ContentContainer>
      <PageDots currentPage={currentPage} numOfPages={numOfPages}/>
    </ContentContainer>
    <ContentContainer>
      <PageNumber currentPage={currentPage} numOfPages={numOfPages}/>
    </ContentContainer>
  </Container>
)

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numOfPages: PropTypes.number.isRequired,
}

export default Pagination
