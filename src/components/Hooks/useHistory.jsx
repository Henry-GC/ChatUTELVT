import { useContext } from "react"
import { historyContext } from "../Context/historyContext"

export function useHistory () {
    const {history,setHistory} = useContext(historyContext)

    return (history,setHistory)
}