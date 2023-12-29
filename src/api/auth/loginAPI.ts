import { jwtDecode } from "jwt-decode";
import { FieldValues } from "react-hook-form";

export async function loginAPI (payload: FieldValues) {
    const BASE_URL: string = process.env.BASE_URL!;

    try {
        const requestURL = `/api/auth/login`;
        const res = await fetch (requestURL, {
            method: 'POST',
            body: JSON.stringify(payload.payload)
        })
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}