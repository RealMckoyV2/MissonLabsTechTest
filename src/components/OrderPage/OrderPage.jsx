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
  const [filter, setFilter] = useState(null)
  const [page, setPage] = useState(0)

  const filteredOrders = filter != null ?
    fixtureData.filter(fixture => fixture.status === filter) :
    fixtureData

  const orderCount = filteredOrders.length
  const numOfPages = orderCount / pageSize

  useEffect(() => {
    if (numOfPages > 1) {
      let nextPage

      if (page >= numOfPages - 1) {
        nextPage = 0
      } else {
        nextPage = (page + 1)
      }
      const id = setTimeout(() => setPage(nextPage), 2000)
      return () => clearTimeout(id)
    }
  }, [page])

  const ordersToDisplay = filteredOrders.slice(page * pageSize, page * pageSize + pageSize)

  return (
    <PageContainer>
      <Filter onFilterChange={(value) => {
        setFilter(value)
        setPage(0)
      }}
      />
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
      <Pagination currentPage={page} numOfPages={numOfPages} />
    </PageContainer>
  )
}

export default OrderPage
