import React from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types'

const PageContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const CurrentPage = styled.span`
  width: 30px;
  height: 30px;
  border-right: 1px solid darkgrey;
  font-weight: 600;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-weight: 600;
  align-self: center;
`

const TotalPages = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`

const PageNumber = ({currentPage, numOfPages}) => (
  <PageContainer>
    <CurrentPage>{(currentPage + 1).toLocaleString('en-UK', {minimumIntegerDigits: 2, useGrouping:false})}</CurrentPage>
    <TotalPages>{(Math.ceil(numOfPages)).toLocaleString('en-UK', {minimumIntegerDigits: 2, useGrouping:false})}</TotalPages>
  </PageContainer>
)

PageNumber.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numOfPages: PropTypes.number.isRequired,
}

export default PageNumber
