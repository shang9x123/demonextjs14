import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const data = [
        { 'name': 'Home', 'link': '/' }
        , { 'name': 'Post', 'link': '/post' },
        { 'name': 'Liên hệ', 'link': '/lienhe' },
        { 'name': 'Danh mục', 'link': '/category/bai-viet-dau' }
    ]

    return NextResponse.json(data);
}