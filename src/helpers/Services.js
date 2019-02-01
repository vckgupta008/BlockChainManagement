import axios from 'axios';

const getBlockList = () => {
  return axios.get('http://localhost:8080/BlockApi/BlockList')
    .then(function (response) {
      return Promise.resolve(response);
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
};

const getBlockInfo = (hash) => {
  return axios.post(`http://localhost:8080/BlockApi/BlockDetails?hash=${hash}`)
    .then(function (response) {
      return Promise.resolve(response);
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
};

export { getBlockList, getBlockInfo };