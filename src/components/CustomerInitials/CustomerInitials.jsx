import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InitialsContainer = styled.div`
  border: 1px solid darkgrey;
  border-radius: 5px;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-weight: 600;
  align-self: center;
  text-transform: uppercase;
`

const CustomerInitials = ({ initials }) => (
  <InitialsContainer>{initials}</InitialsContainer>
)

CustomerInitials.propTypes = {
  initials: PropTypes.string,
}

CustomerInitials.defaultProps = {
  initials: '',
}

export default CustomerInitials
