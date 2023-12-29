import { LoginResponse } from "@/dto/auth.dto";
import { HttpResponse } from "@/dto/http-response.dto";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function updateToken (req: NextApiRequest, res: NextApiResponse) {

    /**
     * ========= POST ===========
     * Body: Refresh Token
     * Expected Return: New Access and Refresh Token
     */
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    if (req.method === 'POST'){
        return await fetch(`${API_URL}/auth/updateToken`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: req.body
            })
            .then(response => response.json())
            .then((responseData: HttpResponse<LoginResponse>) => {
                res.status(200).json(responseData);
            })
            .catch(error => console.error(error))
    } 
    res.status(403).json({ error: "Forbidden!"})
}