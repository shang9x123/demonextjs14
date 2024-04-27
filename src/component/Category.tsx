'use client'
import { base_url } from "@/lib/config";
import { getdata } from "@/lib/http";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
// Define an interface for the product object
interface Product {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    // Add other properties as needed
}
const Category = ({ id }: { id: number }) => {
    const [data, setData] = useState<Product[]>();
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataget = await getdata('/api/category');
                setData(dataget.products);
                setLoading(false);
            } catch (error) {
                //console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    //if (loading) return <>Loading .....</>;
    return (
        <>
            <Row key={1}>
                {data && data.map((item: any, index: number) => {
                    return (
                        <>
                            <Col md={3} key={index}>
                                <div className="card m-2 w-[30%]" >
                                    <Image src={item.thumbnail} alt={item.title} width={500} height={500} quality={100} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text"> {item.description}</p>
                                    </div>
                                </div>
                            </Col>
                        </>
                    )
                })}
            </Row>

        </>
    )
}
export default Category;