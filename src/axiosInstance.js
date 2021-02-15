import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://randomuser.me/api',
  params: {
    seed: 'kraken',
    results: '15',
  },
});

export default instance;
