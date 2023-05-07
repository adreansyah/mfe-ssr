import { swrFetcher } from "@/helper/Fetcher";
export async function getServerSideProps(ctx) {
    const slug = ctx.params.slug
    const getDetailVideoById = await swrFetcher(`/movie/${slug}?api_key=2059a9296fa208b923c55dce3788ced5`)
    console.log({slug})
    console.log({getDetailVideoById})
    return {
        props:{
            data: getDetailVideoById
        }
    }
}