import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.100.242:3333'
})