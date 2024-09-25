import { Box, Button, Spinner, Text } from "@chakra-ui/react"
import React, { useState, useRef, useEffect } from "react"
import Header from "./header"
import Axios from "../utils/axiosConfig"
import Chat from "./chat"
import '../styles/main.css'

function Main({isOpen, onOpen}) {
    const [isLoading, setLoading] = useState(false)
    const [query, setQuery] = useState('')
    const [history, setHistory] = useState([])

    function handleChange(e) {
        setQuery(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        
        const question = query
        setQuery('')
        
        // Guardar el mensaje del usuario en el historial
        setHistory(prevHistory => [...prevHistory, { type: 'user', message: question }])
        
        try {
            const response = await Axios.post('/query', { 'question': question })
            const botResponse = response.data.respuesta
            
            // Guardar la respuesta del bot en el historial
            setHistory(prevHistory => [...prevHistory, { type: 'bot', message: botResponse }])
        } catch (error) {
            console.error("Error fetching response:", error)
            // En caso de error, mostrar un mensaje de error del bot
            setHistory(prevHistory => [...prevHistory, { type: 'bot', message: "Error al obtener respuesta." }])
        }
        
        setLoading(false)
    }

    // Hacer scroll automático cuando cambie el historial
    

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
                <Box
                    display='flex'
                    alignItems='center'
                    height='10%'
                >
                    <Header isOpen={isOpen} onOpen={onOpen}/>
                </Box>
                <Chat history={history} isLoading={isLoading}/>
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
            </Box>
        </>
    )
}

export default Main
