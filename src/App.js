import React from 'react'
import Order from './components/Order'
import Key from './components/Key'

const fixtureData = [
  {
    status: 'readyToTry',
    imageUrl: 'https://i8.amplience.net/i/jpl/jd_355738_a?qlt=92&w=750&h=531&v=1&fmt=webp',
    name: 'Nike Air Max',
    category: 'Men',
    size: 'UK 10',
    color: 'grey/white',
    customerInitials: 'BB',
  },
  {
    status: 'onTheWay',
    imageUrl: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_131369_al&qlt=92&w=363&h=363&v=1',
    name: 'Nike Air Max',
    category: 'Women',
    size: 'UK 8',
    color: 'blue',
    customerInitials: 'PP',
  },
  {
    status: 'inTheQueue',
    imageUrl: null,
    name: 'Nike Air Max',
    category: 'Men',
    size: 'UK 11',
    color: 'blue/white',
    customerInitials: 'CX',
  },
  {
    status: 'outOfStock',
    imageUrl: null,
    name: 'Nike Air Max',
    category: 'Junior',
    size: 'UK 3',
    color: 'black/white',
    customerInitials: 'TS',
  },
]

function App () {
  return (
    <div className="App">
      <Key />
      {
        fixtureData.map((order) => (
          <Order
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
    </div>
  )
}

export default App
