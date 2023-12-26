import axios from "axios";
import { FieldValues } from "react-hook-form";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function LoginAPI(payload: FieldValues) {
    return await axios.post(`${API_URL}/auth/login`, payload.payload)
        .then(async function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.response.data;
        })
}