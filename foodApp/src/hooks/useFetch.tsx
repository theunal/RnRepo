import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        let res = await axios.get(url)
        setData(res.data)
        setLoading(false)
    }

    return { data, loading }
}

export default useFetch