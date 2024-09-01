import { type AxiosResponse } from 'axios'
import api from '.'

const PREFIX = '/profiles'

const AuthService = {
  async createNewProfile (): Promise<AxiosResponse<string>> {
    return await api.post(`${PREFIX}`)
  }
}

export default AuthService
