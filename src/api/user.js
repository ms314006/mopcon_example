import axios from 'axios';

export default {
  getUserInfo: () => (
    axios.get('http://httpbin.org/get')
      .then(resp => resp.data)
  ),
};
