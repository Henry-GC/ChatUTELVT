import { useContext, useState } from "react"
import { historyContext } from "../Context/historyContext"
import { useNavigate } from "react-router-dom"

export function useNewChat () {
    const [question,setQuestion] = useState('')
    const [botResponseNew, setBotResponseNew] = useState('')
    const [queryDisplayNew,setQueryDisplayNew] = useState('')
    const [isLoadingNew, setLoadingNew] = useState(false)
    const {history,setHistory} = useContext(historyContext)
    const navigate = useNavigate()

    function handleNewChange(e) {
        setQuestion(e.target.value)
    }

    const handleNewSubmit = async (e) => {
        e.preventDefault()
        setLoadingNew(true)
        setQueryDisplayNew(question)
        const quest = question

        try {
            const response = await fetch("https://api-chat-utelvt.vercel.app/api/newchat",{
                method: 'POST',
                body: JSON.stringify({question:quest}),
                headers: {
                  "Content-Type":"application/json",
                },
                credentials: 'include'
            })
            const {conversationId} = await response.json()
            console.log(conversationId);

            setHistory((prevHistory) => [...prevHistory,{
                conversationId: conversationId,
                title: quest,
                chats:[]
            }]);

            navigate(`/chat/${conversationId}`,{replace:true})
            setQuestion('')
            
            const responseChat = await fetch("https://api-chat-utelvt.vercel.app/api/chat",{
                method: 'POST',
                body: JSON.stringify({question:quest, conversationId:conversationId}),
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
                    setLoadingNew(false);
                }
                const text = new TextDecoder().decode(value)
                setBotResponseNew((prevData)=> prevData + text)
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
                                question: quest,
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
        setBotResponseNew('')
        setQueryDisplayNew('')
    }
    return {
        question,
        handleNewChange,
        handleNewSubmit,
        botResponseNew,
        queryDisplayNew,
        isLoadingNew
    }
}