import axios from 'axios'

export const wordRequest = axios.create({
    baseURL: 'http://localhost:8800/api/word',
    
})


