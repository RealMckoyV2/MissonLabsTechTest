import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import OrderDetail from '../OrderDetail'
import CustomerInitials from '../CustomerInitials'
import getStatusColor from '../../utils/statusHelper'

const OrderContainer = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  height: 100px;
  padding: 10px 20px;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  border-left: 15px solid ${props => getStatusColor(props.status)};
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 0;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
`

const OrderImage = styled.img`
  min-width: 100px;
  max-width: none;
  height: 100px;
  margin: 0 -100%;
`

const OrderLine = ({ status, imageUrl, name, category, size, color, customerInitials }) => (
  <OrderContainer status={status}>
    <ItemContainer>
      <ImageContainer>
        {imageUrl != null ? <OrderImage src={imageUrl}/> : <OrderImage src="/images/missing.png"/>}
      </ImageContainer>
      <OrderDetail detail={'Name'} value={name} color="white" isBold marginLeft="20px"/>
    </ItemContainer>
    <OrderDetail detail={'Category'} value={category}/>
    <OrderDetail detail={'Size'} value={size}/>
    <OrderDetail detail={'Colour'} value={color}/>
    <CustomerInitials initials={customerInitials}/>
  </OrderContainer>
)

OrderLine.propTypes = {
  status: PropTypes.oneOf([
    'readyToTry',
    'onTheWay',
    'inTheQueue',
    'outOfStock',
  ]).isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  customerInitials: PropTypes.string,
}

OrderLine.defaultProps = {
  category: '',
  size: '',
  color: '',
  customerInitials: '',
}

export default OrderLine
