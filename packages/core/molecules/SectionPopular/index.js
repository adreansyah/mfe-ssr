import Sections from "../../components/Section/Section"
import Data from "../../data/popular.json"
const SectionPopular = () => {
    return <Sections
        title="Popular"
        videos={Data.results.slice(0,12)}
    />
}

export default SectionPopular