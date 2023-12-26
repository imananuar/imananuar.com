import axios from "axios";
import { FieldValues } from "react-hook-form";

export default async function LoginAPI(payload: FieldValues) {
    return await axios.post("http://localhost:8000/api/auth/login", payload.payload)
        .then(async function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.response.data;
        })
}
