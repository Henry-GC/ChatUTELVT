import { Box, Button } from "@chakra-ui/react"
import React, { useState } from "react"
import '../styles/main.css'
import LvtAssistant from "./utelvtAssistant"
import NewChat from "./newChat"
import { Route, Routes } from "react-router-dom"

export default function Main({isOpen, onOpen}) {
    const [isLoading, setLoading] = useState(false)
    const [query, setQuery] = useState('')
    const [botResponse, setBotResponse] = useState('')
    const [history, setHistory] = useState([])

    function handleChange(e) {
        setQuery(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        
        const question = query
        setQuery('')
        
        setHistory(prevHistory => [...prevHistory, { type: 'user', message: question }])
        
        try {
            const response = await fetch("https://api-chat-utelvt.vercel.app/query",{
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
                const text = new TextDecoder().decode(value)
                setBotResponse((prevData)=> prevData + text)
                fullResponse += text
            }
            // setBotResponse('')
            setHistory(prevHistory => [...prevHistory, { type: 'bot', message: fullResponse }])
        } catch (error) {
            console.error("Error fetching response:", error)
            setHistory(prevHistory => [...prevHistory, { type: 'bot', message: "Error al obtener respuesta." }])
        }
        setBotResponse('')
        setLoading(false)
    }

    return (
        <>
            <Box
                className="main-container"
                minW='100%'
                height='100%'
                display='flex'
                flexDirection='column'
                bg='#fff'
                borderLeft='1px solid #eee'
                overflow='hidden'
            >
                <Routes>
                    <Route
                        path="/"
                        element={<LvtAssistant
                            isOpen={isOpen}
                            onOpen={onOpen}
                            history={history}
                            botResponse={botResponse}
                            isLoading={isLoading}/>}
                    />
                    <Route
                        path="/newChat"
                        element={<NewChat
                            isOpen={isOpen}
                            onOpen={onOpen}
                            history={history}
                            botResponse={botResponse}
                            isLoading={isLoading}/>}
                    />
                </Routes>
                <ChatBar
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    query={query}
                    isLoading={isLoading}
                />
            </Box>
        </>
    )
}

//////////// CHAT BAR //////////////

export const ChatBar = ({handleChange,handleSubmit,query,isLoading}) => {
    return(
        <>
            <Box
                display='flex'
                width='100%'
                height='10%'
                padding='1rem'
                alignItems='center'
            >
                <form onSubmit={handleSubmit} style={{ display: 'flex', width: '100%' }}>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={query}
                        placeholder="Escribe tu pregunta..."
                        style={{
                            flexGrow: 1,
                            marginRight: '0.5rem',
                            padding: '0.2rem 0.5rem',
                            border: 'solid 1px #aaa',
                            borderRadius: '0.5rem'
                        }}
                        disabled={isLoading}
                    />
                    <Button
                        type="submit"
                        width="100px"
                        bg='#333'
                        color='#fff'
                        sx={{ _hover: { bg: '#555' } }}
                        isLoading={isLoading}
                    >
                        ENVIAR
                    </Button>
                </form>
            </Box>
        </>
    )
}