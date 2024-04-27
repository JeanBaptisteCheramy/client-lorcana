import { POST } from "./api_helper";
import { BASE_URL, LOGIN_URL, REGISTER_URL } from "./url_helper";

export const postRegister = (data:FormData) => POST(BASE_URL+REGISTER_URL, data)
export const postLogin = (data:FormData) => POST(BASE_URL+LOGIN_URL, data)