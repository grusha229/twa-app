import axios from 'axios'
import store, { RootState } from '../store'

// export const API_URL = 'http://localhost';
export const API_URL = 'https://favs.site/api/v1/'

const api = axios.create({
    withCredentials: false,
    baseURL: API_URL
})

api.interceptors.request.use((config) => {
    const state: RootState = store.getState()
    const initDataRaw = state.authentication.initDataRaw;

    if (initDataRaw) {
        config.headers.Authorization = `tma ${initDataRaw}`
    }
    
    return config;
})

export default api