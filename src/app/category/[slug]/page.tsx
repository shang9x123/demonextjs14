import Category from "@/component/Category";
import Loading from "@/component/loading";
import { getdata } from "@/lib/http";
import { Metadata } from "next";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const PageCategory = () => {

    return (
        <>
            <div className="category pt-3 ">
                <Suspense fallback={<Loading />}>
                    <Category id={3} />
                </Suspense>
            </div>
        </>
    )
}
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const data = fetch('/api/category').then((response) => {
        const dataget = response.json();
    });

    return {
        title: 'danh mục 1',
        description: 'miêu tả 1',
    }
}


export default PageCategory;