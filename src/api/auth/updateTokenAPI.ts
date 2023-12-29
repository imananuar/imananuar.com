import { jwtDecode } from "jwt-decode";
import { NextRequest } from "next/server";
import { FieldValues } from "react-hook-form";

export async function updateTokenAPI (refreshToken: string) {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    try {
        const res = await fetch (`${BASE_URL}/api/auth/updateToken`, {
            method: 'POST',
            body: JSON.stringify({refreshToken: refreshToken})
        })
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}