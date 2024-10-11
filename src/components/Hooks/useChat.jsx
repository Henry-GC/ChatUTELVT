import { useState, useEffect } from "react"

export function useChat () {
    const [isLoading, setLoading] = useState(false)
    const [query, setQuery] = useState('')
    const [queryDisplay,setQueryDisplay] = useState('')
    const [botResponse, setBotResponse] = useState('')
    const [history,setHistory] = useState([])
    const [conversations, setConversations] = useState([])

    const fetchHistory = async () => {
        const response = await fetch("https://api-chat-utelvt.vercel.app/api/chat/history",{
            method: "GET",
            headers: {
                "Content-Type":"application/json"
            },
            credentials: "include"})
        const data = await response.json();
        
        if (data.history) {
            setHistory(data.history.conversations[0].chats)
            setConversations(data.history.conversations)
        }
    }

    useEffect(()=>{
        fetchHistory()
    },[])

    function handleChange(e) {
        setQuery(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        setQueryDisplay(query)
        const question = query
        setQuery('')
                
        try {
            const response = await fetch("https://api-chat-utelvt.vercel.app/api/newchat",{
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
                    setLoading(false);
                }
                const text = new TextDecoder().decode(value)
                setBotResponse((prevData)=> prevData + text)
                fullResponse += text
            }
            setHistory(prevHistory => [...prevHistory, {question: question, response: fullResponse, timestamp: new Date()}])
        } catch (error) {
            console.error("Error fetching response:", error)
        }
        setQueryDisplay('')
        setBotResponse('')
        setLoading(false)
    }

    return {query,
            history,
            conversations,
            isLoading,
            queryDisplay,
            botResponse,
            handleChange,
            handleSubmit}
}