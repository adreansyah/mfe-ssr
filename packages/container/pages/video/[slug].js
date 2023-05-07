import VideoDetailRemote from 'video/vdp'
export { getServerSideProps } from 'video/dataFetchVideo'
const DetailVideo = ({data}) => {
    return (
        <VideoDetailRemote/>
    )
}

export default DetailVideo