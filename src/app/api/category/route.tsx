import { getdata } from "@/lib/http";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const data = await getdata('https://dummyjson.com/products');
    return NextResponse.json(data);
}