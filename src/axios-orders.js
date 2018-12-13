import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c83bb.firebaseio.com/'
});

export default instance;