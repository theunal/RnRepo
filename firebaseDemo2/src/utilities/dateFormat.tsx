
const MessageDateFormat = (date: string) => {
    let hours = date.substring(11).substring(0, 8)
    let day = date.split('-')
    return `${day[2].substring(0, 2)}.${day[1]}.${day[0].substring(0, 4)} ${hours.toString()}`
}

export default MessageDateFormat