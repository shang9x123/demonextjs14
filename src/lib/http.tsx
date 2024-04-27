export async function getdata(url: string) {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
        throw new Error('Error fetching');
    }
    return res.json();
}