import { NextRequest, NextResponse } from "next/server";
import { env } from "process";
import { URL } from "url";

export async function GET(request: NextRequest) {
    return NextResponse.redirect(new URL('/', request.url))
}