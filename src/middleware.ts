import { NextRequest, NextResponse } from "next/server";

export default function authMiddleware(req: NextRequest) {
    return !req.cookies.has("access_token")
    ? NextResponse.redirect(`${req.nextUrl.origin}/login`)
    : NextResponse.next()
}

export const config = {
    matcher: ["/projects/main"]
}   