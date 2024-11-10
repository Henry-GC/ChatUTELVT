import { Box, Text, Spinner, Avatar } from "@chakra-ui/react"
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
                    <Box
                        height='100%'
                    >
                    </Box>
                    {history.map((entry,index)=>(
                        <Box
                            key={index}
                            display="flex"
                            flexDirection='column'
                            padding="0.5rem"
                            gap="1rem"
                        >
                            <Box
                                display='flex'
                                bg='#3182CE'
                                color='#fff'
                                borderRadius="10px"
                                padding="0.5rem 1rem"
                                maxWidth="60%"
                                gap="1rem"
                                textAlign='right'
                                whiteSpace='pre-line'
                                alignSelf='flex-end'
                            >
                                <ReactMarkdown>{entry.question}</ReactMarkdown>
                                <Avatar size="sm" name="User message" src="/multimedia/avatar_user.png"/>
                            </Box>
                            <Box
                                display='flex'
                                bg='#E2E8F0'
                                color='#000'
                                borderRadius="10px"
                                padding="0.5rem 1rem"
                                maxWidth="60%"
                                gap="1rem"
                                textAlign='left'
                                whiteSpace='pre-line'
                                alignSelf='flex-start'
                            >
                                <Avatar size="sm" name="User message" src="/multimedia/avatar_bot.png"/>
                                <Box>
                                    <ReactMarkdown>{entry.response}</ReactMarkdown>
                                </Box>
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
                                display='flex'
                                bg='#3182CE'
                                color='#fff'
                                borderRadius="10px"
                                padding="0.5rem 1rem"
                                maxWidth="60%"
                                gap="1rem"
                                textAlign='right'
                                whiteSpace='pre-line'
                                alignSelf='flex-end'
                            >
                                <ReactMarkdown>{queryDisplay}</ReactMarkdown>
                                <Avatar size="sm" name="User message" src="/multimedia/avatar_user.png"/>
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
                                display='flex'
                                bg='#E2E8F0'
                                color='#000'
                                borderRadius="10px"
                                padding="0.5rem 1rem"
                                maxWidth="60%"
                                gap="1rem"
                                textAlign='left'
                                whiteSpace='pre-line'
                            >
                                <Avatar size="sm" name="User message" src="/multimedia/avatar_bot.png"/>
                                <Box>
                                    <ReactMarkdown>{botResponse}</ReactMarkdown>
                                </Box>
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