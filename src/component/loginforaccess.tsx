'use client'
import axios from "axios";
import { useEffect, useState } from "react"
import UAParse from 'ua-parser-js';
const Loginfoaccess = () => {
    const [browserInfo, setBrowserInfo] = useState<string>('');
    const [osInfo, setOSInfo] = useState(null);
    const [deviceInfo, setDeviceInfo] = useState(null);
    useEffect(() => {
        if (typeof window !== "undefined") {
            const { userAgent } = window.navigator;
            const browser = userAgent.toLowerCase();
            let browserName = 'Unknown';
            if (browser.includes('firefox')) {
                browserName = 'Firefox';
            } else if (browser.includes('chrome')) {
                browserName = 'Chrome';
            } else if (browser.includes('safari')) {
                browserName = 'Safari';
            } else if (browser.includes('edge')) {
                browserName = 'Edge';
            } else if (browser.includes('opera') || browser.includes('opr')) {
                browserName = 'Opera';
            }
            setBrowserInfo(browserName);
            const formdata = new FormData();
            formdata.append('browser', browserName);
            axios.request({
                url: '/api/loginaccess',
                data: formdata,
                method: 'POST',
            }).then((response) => {
                // console.log(response.data);
            });
        }
    }, [])
    return (
        <>
        </>
    )
}
export default Loginfoaccess;