import React from 'react'
import PropTypes from "prop-types";
import styled from 'styled-components'
import getStatusColor from '../../utils/statusHelper'

const KeyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const KeyItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`

const KeyColor = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  border: 1px solid grey;
  border-radius: 50px;
  background-color: ${(props) => getStatusColor(props.status)};
  cursor: pointer;
`

const KeyName = styled.span`
  text-transform: uppercase;
  font-size: 0.6em;
  align-self: center;
  color: lightgrey;
`

const Filter = ({onFilterChange}) => (
  <KeyContainer>
    <KeyItem>
      <KeyColor status="readyToTry" onClick={() => onFilterChange("readyToTry")}/>
      <KeyName>Ready to try</KeyName>
    </KeyItem>
    <KeyItem>
      <KeyColor status="onTheWay" onClick={() => onFilterChange("onTheWay")}/>
      <KeyName>On the way</KeyName>
    </KeyItem>
    <KeyItem>
      <KeyColor status="inTheQueue" onClick={() => onFilterChange("inTheQueue")}/>
      <KeyName>In the queue</KeyName>
    </KeyItem>
    <KeyItem>
      <KeyColor status="outOfStock" onClick={() => onFilterChange("outOfStock")}/>
      <KeyName>Out of stock</KeyName>
    </KeyItem>
  </KeyContainer>
)

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
}

export default Filter
