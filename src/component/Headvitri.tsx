'use client'

import { getdata } from "@/lib/http";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";
interface Navbar {
    name: string,
    link: string
}
const Headvitri = () => {
    const [data, setData] = useState<Navbar[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const fetchData = async () => {
        try {
            const dataget = await getdata('/api/menu');
            setData(dataget);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/#">
                    Navbar
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        {data && data.map((item, index) => {
                            return (
                                <>
                                    <li className="nav-item" key={item.name}>
                                        <NavLink className="nav-link">
                                            <Link href={item.link}>{item.name}</Link>
                                        </NavLink>
                                    </li>
                                </>
                            )
                        })}
                    </ul>

                </div>
            </nav>
        </>
    )
}
export default Headvitri;