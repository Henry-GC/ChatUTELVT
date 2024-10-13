import { useState, useEffect } from "react"

export function useChatLVT () {
    const [isLoadingLVT, setLoadingLVT] = useState(false)
    const [queryLVT, setQueryLVT] = useState('')
    const [queryDisplayLVT,setQueryDisplayLVT] = useState('')
    const [botResponseLVT, setBotResponseLVT] = useState('')
    const [historyLVT,setHistoryLVT] = useState([])

    const fetchHistoryLVT = async () => {
        const response = await fetch("https://api-chat-utelvt.vercel.app/api/chat/historyLVT",{
            method: "GET",
            headers: {
                "Content-Type":"application/json"
            },
            credentials: "include"})
        const data = await response.json();
        
        if (data.conversations) {
            setHistoryLVT(data.conversations.chats)
        }
    }

    useEffect(()=>{
        fetchHistoryLVT()
    },[])

    function handleChangeLVT(e) {
        setQueryLVT(e.target.value)
    }

    async function handleSubmitLVT(e) {
        e.preventDefault()
        setLoadingLVT(true)
        setQueryDisplayLVT(queryLVT)
        const question = queryLVT
        setQueryLVT('')
                
        try {
            const response = await fetch("https://api-chat-utelvt.vercel.app/api/query",{
                method: 'POST',
                body: JSON.stringify({question:question}),
                headers: {
                  "Content-Type":"application/json",
                },
                credentials: 'include'
              })
            const reader = response.body.getReader()
            let fullResponse = ''
            while (true){
                const {done,value} = await reader.read()
                if(done){
                    break;
                }
                if(value){
                    setLoadingLVT(false);
                }
                const text = new TextDecoder().decode(value)
                setBotResponseLVT((prevData)=> prevData + text)
                fullResponse += text
            }
            setHistoryLVT(prevHistory => [...prevHistory, {question: question, response: fullResponse, timestamp: new Date()}])
        } catch (error) {
            console.error("Error fetching response:", error)
        }
        setQueryDisplayLVT('')
        setBotResponseLVT('')
        setLoadingLVT(false)
    }

    return {queryLVT,
            historyLVT,
            isLoadingLVT,
            queryDisplayLVT,
            botResponseLVT,
            handleChangeLVT,
            handleSubmitLVT}
}