import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com'
});

export const repositories = axios.create({
  baseURL: 'https://api.github.com'
});

export const siso = axios.create({
  baseURL: 'http://www.sisoapi.somee.com',
  headers: {'Authorization': 'Basic M0xlY24wUiFAMjAyUyFzb2FQUA=='},
});

