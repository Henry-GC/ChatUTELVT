import { Box, Button } from "@chakra-ui/react"
import React, { useState } from "react"
import Header from "./header"
import Axios from "../utils/axiosConfig"

function Main (){

    const [query, setQuery] = useState('')
    const [res, setRes] = useState('')

    function handleChange (e) {
        setQuery(e.target.value)
    }

    async function handleSubmit (e) {
        e.preventDefault()
        console.log(query);
        const response = await Axios.post('/query', {'question': query})
        console.log(response.data.respuesta);
        setRes(response.data.respuesta)
        setQuery('')
    }

    return (
        <>
            <Box
                className="main-container"
                width='80%'
                minHeight='100vh'
                display='flex'
                flexDirection='column'
                bg='#fff'
                borderLeft='1px solid #eee'
            >
                <Header />
                <Box
                    display='flex'
                    flexDirection='column'
                    flex='1'
                >
                    <Box
                        className="chat-box"
                        flexGrow='1'
                        bg='#eee'
                    >
                        {res}
                    </Box>
                    <Box
                        width='100%'
                        padding='1rem'
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
                            />
                            <Button
                                type="submit"
                                width="100px"
                                bg='#333'
                                color='#fff'
                                sx={{_hover:{bg:'#555'}}}
                            >
                                ENVIAR
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Main
