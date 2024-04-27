const Page = ({ params }: { params: { slug: string[] } }) => {
    //console.log(params.slug[0])
    return (
        <>
            <h5>xin chào nhéas {params.slug[0]}</h5>
        </>
    )
}
export default Page;