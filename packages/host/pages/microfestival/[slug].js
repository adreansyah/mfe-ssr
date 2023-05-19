import React from "react";
import Movies from 'movies/mvd';

export async function getServerSideProps(ctx) {
    return {
        props: {}
    }
}

const App = (props) => {
    return (
        <Movies />
    )
}

export default App