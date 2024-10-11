import Header from "../header";
import Chat from "../chat";
import { Text } from "@chakra-ui/react";
import { ChatBar } from "../chatBar";

export default function NewChat (props) {
    return(
        <>
            <Header isOpen={props.isOpen} onOpen={props.onOpen}>
                <Text
                    fontSize='1.2rem'
                    fontWeight='700'
                    margin='auto 1rem'
                >Nueva Conversación</Text>
            </Header>
            <Chat queryDisplay={props.queryDisplay} botResponse={props.botResponse} imgBg='none' history={props.history} isLoading={props.isLoading}/>
            <ChatBar
                handleChange={props.handleChange}
                handleSubmit={props.handleSubmit}
                query={props.query}
                isLoading={props.isLoading}
            />
        </>
    )
}
