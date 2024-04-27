import Postitem_com from "@/component/postitem";
import { title } from "process";
import React from "react";
const Page = async ({ params }: { params: { slug: string } }) => {
    const slug = params.slug;
    return (
        <div>
            <div>

                <Postitem_com data='heheheh' />
            </div>
        </div>
    )
}
export async function generateMetadata({ params }: { params: { slug: string } }) {
    return {
        title: 'mail',
    }
}
export default Page;