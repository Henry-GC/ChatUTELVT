import { useEffect, useState } from "react"

export function useNewChat () {
    const [historyNewChat,setHistoryNewChat] = useState([])

    return {historyNewChat}
}