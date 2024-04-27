
import Postitem_com from "@/component/postitem";
import axios from "axios";
import { Suspense } from "react";

export default async function Page() {

    return (
        <div>
            <div>
                <h3>Bài viết slug</h3>
                <Suspense>
                    <Postitem_com data={1} />
                </Suspense>

            </div>
        </div>
    )
}
// or Dynamic metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
    return {
        title: 'Slug1234',
        description: 'Description1234',
        image: 'https://picsum.photos/200/300'
    }
}
