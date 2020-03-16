import React from 'react'
import styled from 'styled-components'
import PageDots from '../PageDots'
import PageNumber from '../PageNumber'

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

export default Pagination
