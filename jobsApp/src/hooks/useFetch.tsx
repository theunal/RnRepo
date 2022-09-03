import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string, page: number) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [page])

    const getData = async () => {
        setLoading(true)
        let res = await axios.get(url)
        setData(res.data)
        setLoading(false)
    }

    return { data, loading }
}

export default useFetch