import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import fixtureData from './fixtures'
import Filter from '../Filter'
import OrderLine from '../OrderLine'
import Pagination from '../Pagination'

const PageContainer = styled.div`
  padding: 20px;
`

const OrderPage = () => {
  const pageSize = 4
  const [filters, setFilters] = useState([])
  const [page, setPage] = useState(0)
  const [filteredOrders, setFilteredOrders] = useState(fixtureData)

  const orderCount = filteredOrders.length
  const numOfPages = orderCount / pageSize

  const ordersToDisplay = filteredOrders.slice(page * pageSize, page * pageSize + pageSize)

  useEffect(() => {
    const interval = setInterval(() => {
      if (page >= numOfPages - 1) {
        setPage(0)
      } else {
        setPage(page + 1)
      }
    }, 2000)
    return () => clearInterval(interval)
  })

  const updateFilters = (filter) => {
    const newFilters = filters
    if (newFilters.includes(filter)) {
      newFilters.splice(newFilters.indexOf(filter), 1)
    } else {
      newFilters.push(filter)
    }

    setFilters(newFilters)
  }

  const filterOrders = () => {
    const filteredOrders = filters.length > 0 ?
      fixtureData.filter(fixture => filters.includes(fixture.status)) :
      fixtureData

    setFilteredOrders(filteredOrders)
  }

  return (
    <PageContainer>
      <Filter
        filters={filters}
        onFilterChange={(filter) => {
          updateFilters(filter)
          filterOrders()
          setPage(0)
        }}/>
      {
        ordersToDisplay.map((order, index) => (
          <OrderLine
            key={index}
            status={order.status}
            imageUrl={order.imageUrl}
            name={order.name}
            category={order.category}
            size={order.size}
            color={order.color}
            customerInitials={order.customerInitials}
          />
        ))
      }
      <Pagination currentPage={page} numOfPages={numOfPages}/>
    </PageContainer>
  )
}

export default OrderPage
