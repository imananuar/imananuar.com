import { LoginResponse } from "@/dto/auth.dto";
import { HttpResponse } from "@/dto/http-response.dto";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function login (req: NextApiRequest, res: NextApiResponse) {

    /**
     * ========= POST ===========
     * Body: Username & Password
     * Expected Return: Token
     */
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    if (req.method === 'POST'){
        return await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: req.body
            })
            .then(response => response.json())
            .then((responseData: HttpResponse<LoginResponse>) => {
                console.log(req.body.username + " has login with status code: " + responseData.statusCode);
                res.status(200).json(responseData);
            })
            .catch(error => res.status(401).json(error))
    } 
    res.status(403).json({ error: "Forbidden!"})
}