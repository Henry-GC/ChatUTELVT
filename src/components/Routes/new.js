import Header from "../header";
import { Text } from "@chakra-ui/react";
import { ChatBar } from "../chatBar";
import LandingChat from "../LandingChat";

export default function New (props) {
    return(
        <>
            <Header isOpen={props.isOpen} onOpen={props.onOpen}>
                <Text
                    fontSize='1.2rem'
                    fontWeight='700'
                    margin='auto 1rem'
                >Nueva Conversación</Text>
            </Header>
            <LandingChat/>
            <ChatBar
                handleChange={props.handleChange}
                handleSubmit={props.handleSubmit}
                query={props.query}
                isLoading={props.isLoading}
                
            />
        </>
    )
}
