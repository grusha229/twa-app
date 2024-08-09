import { AxiosResponse } from "axios";
import api from ".";

const PREFIX = '/profiles'

export default class AuthService {

    static async createNewProfile() :Promise<AxiosResponse<string>> {

        return api.post(`${PREFIX}`)
    }
}