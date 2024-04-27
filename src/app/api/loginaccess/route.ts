import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
interface DataReturn {
    status: number;
    data: { [key: string]: any }; // This should be an object
}

export async function POST(request: NextRequest) {
    // kiểm tra thông tin token có hay không 
    const checktoken = request.cookies.get('token');;
    // console.log(checktoken);

    let ip = request.headers.get('X-Forwarded-For');
    //let ip = request.ip;
    const city = request.geo?.city;
    let data1 = { 'city': 'Hà nội', 'country': 'Việt nam', 'ip': ip };
    const data: DataReturn = { status: 0, data: data1 }
    let data123 = null;
    const getdata = await axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
        data123 = res.data.title
    });

    // Fix the Set-Cookie header format
    const headers = {
        // 'Set-Cookie': 'token=12345; SameSite=Strict;Max-Age=500;Path=/;Domain=monngonne.com'
        'Set-Cookie': 'token=' + data123 + '; SameSite=Strict;Max-Age=500;Path=/'
    };
    return NextResponse.json(data, { headers });
}