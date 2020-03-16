const statusColors = {
  readyToTry: '#DAF7A6',
  onTheWay: '#33DBFF',
  inTheQueue: '#FF9033',
  outOfStock: '#F02828',
}

const getStatusColor = (status) => statusColors[status] || "darkgrey";

export default getStatusColor;
