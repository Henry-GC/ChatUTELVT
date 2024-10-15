import { useState, useEffect, useContext } from "react"
import { historyContext } from "../Context/historyContext"

export function useChat () {
    const [isLoading, setLoading] = useState(false)
    const [query, setQuery] = useState('')
    const [queryDisplay,setQueryDisplay] = useState('')
    const [botResponse, setBotResponse] = useState('')
    const {history,setHistory} = useContext(historyContext)

    const fetchHistory = async () => {
        const response = await fetch("https://api-chat-utelvt.vercel.app/api/chat/history",{
            method: "GET",
            headers: {
                "Content-Type":"application/json"
            },
            credentials: "include"})
        const data = await response.json();
        
        if (data.history) {
            setHistory(data.history.conversations)
        }
    }

    useEffect(()=>{
        fetchHistory()
    },[])

    function handleChange(e) {
        setQuery(e.target.value)
    }

    async function handleSubmit(e, conversationId) {
        e.preventDefault()
        setLoading(true)
        setQueryDisplay(query)
        const question = query
        setQuery('')
                
        try {
            const response = await fetch("https://api-chat-utelvt.vercel.app/api/chat",{
                method: 'POST',
                body: JSON.stringify({question:question, conversationId}),
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
                    setLoading(false);
                }
                const text = new TextDecoder().decode(value)
                setBotResponse((prevData)=> prevData + text)
                fullResponse += text
            }

            setHistory((prevHistory) => {
                const updatedHistory = prevHistory.map((conversation) => {
                    if (conversation.conversationId === conversationId) {
                        return {
                            ...conversation,
                            chats: [
                                ...conversation.chats,
                                {
                                question: question,
                                response: fullResponse,
                                timestamp: new Date(),
                                },
                            ],
                        };
                    }
                    return conversation;
                });
                return updatedHistory;
            });

        } catch (error) {
            console.error("Error fetching response:", error)
        }
        setQueryDisplay('')
        setBotResponse('')
        setLoading(false)
    }

    return {query,
            history,
            isLoading,
            queryDisplay,
            botResponse,
            handleChange,
            handleSubmit,
            setLoading,
            setBotResponse
        }
}