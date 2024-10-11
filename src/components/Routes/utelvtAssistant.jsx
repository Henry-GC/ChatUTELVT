import Chat from "../chat";
import Header from "../header";
import { ChatBar } from "../chatBar";
import { Text } from "@chakra-ui/react";

function LvtAssistant (props) {
    return(
        <>
            <Header isOpen={props.isOpen} onOpen={props.onOpen}>
                <Text
                    fontSize='1.2rem'
                    fontWeight='700'
                    margin='auto 1rem'
                >Asistente virtual UTELVT</Text>
            </Header>
            <Chat queryDisplay={props.queryDisplay} botResponse={props.botResponse} imgBg='/multimedia/utelvt.png' history={props.history} isLoading={props.isLoading}/>
            <ChatBar
                handleChange={props.handleChangeLVT}
                handleSubmit={props.handleSubmitLVT}
                query={props.query}
                isLoading={props.isLoading}
            />
        </>
    )
}

export default LvtAssistant
