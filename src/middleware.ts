import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { HttpResponse } from "./dto/http-response.dto";
import { LoginResponse } from "./dto/auth.dto";
import { jwtDecode } from "jwt-decode";
import { updateTokenAPI } from "./api/auth/updateTokenAPI";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function authMiddleware(req: NextRequest) {

    const refreshToken: string = req.cookies.get('refresh_token')?.value!
    const nextResponse = NextResponse.next();

    if (!req.cookies.has("access_token")) {
        if (!req.cookies.has("refresh_token")) {
            return NextResponse.redirect(`${req.nextUrl.origin}/login`)
        }
        const responseData: HttpResponse<LoginResponse> = await updateTokenAPI(refreshToken);
        const accessExpiryTime = new Date(jwtDecode(responseData.data.accessToken).exp! * 1000 );
        const refreshExpiryTime = new Date(jwtDecode(responseData.data.refreshToken).exp! * 1000 );
        nextResponse.cookies.set("access_token", responseData.data.accessToken, { expires: accessExpiryTime });
        nextResponse.cookies.set("refresh_token", responseData!.data.refreshToken, { expires: refreshExpiryTime });
    }

    return nextResponse
}

export const config = {
    matcher: ["/projects/main"]
}   