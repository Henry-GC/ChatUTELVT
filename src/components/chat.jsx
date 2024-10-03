import { Box, Text, Spinner } from "@chakra-ui/react"
import { useEffect, useRef } from "react"
import ReactMarkdown from "react-markdown"

function Chat ({botResponse,isLoading,history,imgBg}) {
    
    const chatBoxRef = useRef(null)

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
        }
    }, [history,botResponse])

    return (
        <>
            <Box
                className="chat-box"
                minHeight='85%'
                bg='#eee'
                padding="1rem"
                overflowY='scroll'
                display="flex"
                flexDirection="column"
                backgroundImage={imgBg}
                backgroundRepeat='no-repeat'
                backgroundSize='30%'
                backgroundPosition='center center'
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
                            whiteSpace='pre-line'
                        >
                            <ReactMarkdown>{entry.message}</ReactMarkdown>
                            {/* <Text></Text> */}
                        </Box>
                    </Box>
                ))}
                {botResponse && (
                    <Box
                    display="flex"
                    justifyContent='flex-start'
                    padding="0.5rem"
                    >
                        <Box
                            bg='#E2E8F0'
                            color='#000'
                            borderRadius="10px"
                            padding="0.5rem 1rem"
                            maxWidth="60%"
                            textAlign='left'
                            whiteSpace='pre-line'
                        >
                            <ReactMarkdown>{botResponse}</ReactMarkdown>
                            {/* <Text>{botResponse}</Text> */}
                        </Box>
                    </Box>
                )}
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