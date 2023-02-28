import axios from 'axios'
const request = axios.create({
  baseURL: process.env.development.VUE_APP_URL
})
export default request
