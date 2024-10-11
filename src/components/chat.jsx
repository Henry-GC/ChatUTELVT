import { Box, Text, Spinner } from "@chakra-ui/react"
import { useEffect, useRef } from "react"
import ReactMarkdown from "react-markdown"

function Chat ({botResponse,isLoading,history,imgBg,queryDisplay}) {
    const chatBoxRef = useRef(null)

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
        }
    }, [history,botResponse,queryDisplay])

    return (
        <>
            {history?(
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
                    ref={chatBoxRef}
                >
                    {history.map((entry,index)=>(
                        <Box
                            key={index}
                            display="flex"
                            flexDirection='column'
                            padding="0.5rem"
                        >
                            <Box
                                bg='#3182CE'
                                color='#fff'
                                borderRadius="10px"
                                padding="0.5rem 1rem"
                                maxWidth="60%"
                                textAlign='right'
                                whiteSpace='pre-line'
                                alignSelf='flex-end'
                            >
                                <ReactMarkdown>{entry.question}</ReactMarkdown>
                            </Box>
                            <Box
                                bg='#E2E8F0'
                                color='#000'
                                borderRadius="10px"
                                padding="0.5rem 1rem"
                                maxWidth="60%"
                                textAlign='left'
                                whiteSpace='pre-line'
                                alignSelf='flex-start'
                            >
                                <ReactMarkdown>{entry.response}</ReactMarkdown>
                            </Box>
                        </Box>
                    ))}
                    {queryDisplay && (
                        <Box
                            display="flex"
                            justifyContent='flex-end'
                            padding="0.5rem"
                        >
                            <Box
                                bg='#3182CE'
                                color='#fff'
                                borderRadius="10px"
                                padding="0.5rem 1rem"
                                maxWidth="60%"
                                textAlign='right'
                                whiteSpace='pre-line'
                                alignSelf='flex-end'
                            >
                                <ReactMarkdown>{queryDisplay}</ReactMarkdown>
                            </Box>
                        </Box>
                    )}
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
                            </Box>
                        </Box>
                    )}
                    {isLoading && (
                        <Box display="flex" padding="1rem">
                            <Spinner size="lg" />
                        </Box>
                    )}
                </Box>
            ):(
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            )}
        </>
    )
}

export default Chat