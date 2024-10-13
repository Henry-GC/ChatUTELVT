import { useState } from "react"
import { useChat } from "./useChat"

export function useNewChat () {
    const [question,setQuestion] = useState('')
    const {setLoading,setBotResponse,setHistory,fetchHistory} = useChat()

    function handleNewChange(e) {
        setQuestion(e.target.value)
    }

    const handleNewSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const response = await fetch("https://api-chat-utelvt.vercel.app/api/newchat",{
                method: 'POST',
                body: JSON.stringify({question:question}),
                headers: {
                  "Content-Type":"application/json",
                },
                credentials: 'include'
            })
            const {conversationId} = await response.json()
            console.log(conversationId);
            fetchHistory()
            const responseChat = await fetch("https://api-chat-utelvt.vercel.app/api/chat",{
                method: 'POST',
                body: JSON.stringify({question:question, conversationId:conversationId}),
                headers: {
                    "Content-Type":"application/json",
                  },
                  credentials: 'include'
            })
            const reader = responseChat.body.getReader()
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
    }
    return {handleNewChange,handleNewSubmit}
}