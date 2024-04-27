'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
function Postitem_com(data: any) {
    const [dataget, setDataget] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const dataget = axios.get('api/post').then((res) => {
            setDataget(res.data.data);
            setLoading(false);
        });
    }, [])
    if (loading) return <>Loading ...</>
    return (
        <>
            <div>
                <h3>Xin chào {dataget}</h3>
            </div>
        </>

    )
}
export default Postitem_com;