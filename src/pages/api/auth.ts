import axios from "axios";
import { FieldValues } from "react-hook-form";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function LoginAPI(payload: FieldValues) {
    return await axios.post(`${API_URL}/auth/login`, payload.payload)
        .then(async function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.response.data;
        })
}

export async function UpdateToken(refreshToken: string) {
    return await axios.post(`${API_URL}/auth/updateToken`, refreshToken)
        .then(async function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error.response.data;
        })
}