import { Box } from "@chakra-ui/react"
import React from "react"
import './Assets/main.css'
import LvtAssistant from "./Routes/utelvtAssistant"
import NewChat from "./Routes/newChat"
import New from "./Routes/new"
import { Route, Routes } from "react-router-dom"
import { useChatLVT } from "./Hooks/useChatLVT"
import { useChat } from "./Hooks/useChat"
import { useNewChat } from "./Hooks/useNewChat"

export default function Main({isOpen, onOpen}) {
    const { 
            handleNewChange,
            handleNewSubmit
        } = useNewChat()
    const {
            query,
            queryDisplay,
            botResponse,
            conversations,
            isLoading,
            handleChange,
            handleSubmit
        } = useChat()
    const {
            queryLVT,
            queryDisplayLVT,
            botResponseLVT,
            historyLVT,
            isLoadingLVT,
            handleChangeLVT,
            handleSubmitLVT
        } = useChatLVT()

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
                        element={<New
                            isOpen={isOpen}
                            onOpen={onOpen}
                            handleChange={handleNewChange}
                            handleSubmit={handleNewSubmit}
                            isLoading={isLoading}/>}
                    />
                    {conversations.map((conversation)=>(
                        <Route
                            key={conversation.conversationId}
                            path={`/chat/${conversation.conversationId}`}
                            element={<NewChat
                                isOpen={isOpen}
                                onOpen={onOpen}
                                history={conversation.chats}
                                queryDisplay={queryDisplay}
                                botResponse={botResponse}
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}
                                query={query}
                                isLoading={isLoading}/>}
                        />
                    ))}
                    <Route
                        path="/asistente"
                        element={<LvtAssistant
                            isOpen={isOpen}
                            onOpen={onOpen}
                            history={historyLVT}
                            queryDisplay={queryDisplayLVT}
                            botResponse={botResponseLVT}
                            handleChangeLVT={handleChangeLVT}
                            handleSubmitLVT={handleSubmitLVT}
                            query={queryLVT}
                            isLoading={isLoadingLVT}/>}
                    />
                </Routes>
            </Box>
        </>
    )
}