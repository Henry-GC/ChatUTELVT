import Header from "./header";
import Chat from "./chat";
import { Select, Text } from "@chakra-ui/react";

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
            <Chat botResponse={props.botResponse} imgBg='none' history={props.history} isLoading={props.isLoading}/>
        </>
    )
}
