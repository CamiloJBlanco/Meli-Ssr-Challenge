const formatNumber = (price) => {
  const priceTemp = price.toString().split('.');
  priceTemp[0] = priceTemp[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return priceTemp.join('.');
};

export default formatNumber;
