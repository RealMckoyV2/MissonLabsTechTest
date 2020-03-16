import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Detail = styled.div`
  width: 150px;
  text-align: left;
  color: ${props => props.color};
  font-weight: ${props => props.isBold ? 600 : 400};
  margin-left: ${props => props.marginLeft};
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const OrderDetail = ({ detail, value, color, isBold, marginLeft }) => (
  <Detail color={color} isBold={isBold} marginLeft={marginLeft}>
    {detail != null ? <div>{detail}:</div> : null}
    <div>{value}</div>
  </Detail>
)

OrderDetail.propTypes = {
  detail: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  isBold: PropTypes.bool,
  marginLeft: PropTypes.string,
}

OrderDetail.defaultProps = {
  detail: null,
  value: '',
  color: 'light-grey',
  isBold: false,
  marginLeft: '0px',
}

export default OrderDetail
