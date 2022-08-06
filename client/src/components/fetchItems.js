import axios from 'axios';

const constantUrl = 'http://localhost:3001/';

const makeSearch = async (search) => {
  const url = `${constantUrl}api/items?limit=4&q=${search}`;
  const response = await axios.get(url);
  return response.data;
};

const getItem = async (id) => {
  const url = `${constantUrl}api/items/${id}`;
  const response = await axios.get(url);
  return response.data;
};

const FetchItems = { makeSearch, getItem };
export default FetchItems;
