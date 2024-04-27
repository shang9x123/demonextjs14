import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const formData = await request.formData()
    const title = formData.get('title')
    const content = formData.get('content')
    return NextResponse.json({
        status: 1,
        title: title,
        content: "content",
    })
}