import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    let search = request.nextUrl.searchParams;
    let slug = search.get('var1');
    //console.log(slug);

    return NextResponse.json({
        status: 123,
        data: 'xin chào các bạn'
    })
}