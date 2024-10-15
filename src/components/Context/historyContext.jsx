import { createContext, useState } from "react";

export const historyContext = createContext()

export function HistoryProvider ({children}) {
    const [history,setHistory] = useState([])
    return (
        <historyContext.Provider
            value={{
                history,
                setHistory
            }}
        >
            {children}
        </historyContext.Provider>
    )
}