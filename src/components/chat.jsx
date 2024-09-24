import { Box, Text, Spinner } from "@chakra-ui/react"
import { useEffect, useRef } from "react"

function Chat ({isLoading,history}) {
    
    const chatBoxRef = useRef(null)

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
        }
    }, [history])

    return (
        <>
            <Box
                className="chat-box"
                height='80%'
                bg='#eee'
                padding="1rem"
                overflowY='scroll'
                display="flex"
                flexDirection="column"
                ref={chatBoxRef} // Referencia para la caja de chat
            >
                {history.map((entry, index) => (
                    <Box
                        key={index}
                        display="flex"
                        justifyContent={entry.type === 'user' ? 'flex-end' : 'flex-start'}
                        padding="0.5rem"
                    >
                        <Box
                            bg={entry.type === 'user' ? '#3182CE' : '#E2E8F0'}
                            color={entry.type === 'user' ? '#fff' : '#000'}
                            borderRadius="10px"
                            padding="0.5rem 1rem"
                            maxWidth="60%"
                            textAlign={entry.type === 'user' ? 'right' : 'left'}
                        >
                            <Text>{entry.message}</Text>
                        </Box>
                    </Box>
                ))}
                {isLoading && (
                    <Box display="flex" padding="1rem">
                        <Spinner size="lg" />
                    </Box>
                )}
            </Box>
        </>
    )
}

export default Chat