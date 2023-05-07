import { swrFetcher } from "@/helper/Fetcher";
import useSWR from 'swr'
import { useRouter } from "next/router";
export { getServerSideProps } from './dataFetch'
const DetailVideo = ({data: videoDetail}) => {
    const router = useRouter();
    const { slug } = router
    const {data} = useSWR(`/movie/${slug}?api_key=2059a9296fa208b923c55dce3788ced5`, swrFetcher,{fallbackData: videoDetail})
    console.log({videoDetail})
    return <div className="flex">Page Detail Video {JSON.stringify(data)}</div>
}

export default DetailVideo;