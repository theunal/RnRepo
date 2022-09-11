
const DataParser = (data: any) => {
    if (data == null)
        return

    return Object.keys(data).map(x => {
        return {
            id: x,
            ...data[x]
        }
    }).sort(function (a: any, b: any) {
        return (a.date > b.date) ? -1 : ((a.date > b.date) ? 1 : 0)
    })
}

export default DataParser