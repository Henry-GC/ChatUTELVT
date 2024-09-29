import Chat from "./chat";
import Header from "./header";
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
            <Chat imgBg='/multimedia/utelvt.png' history={props.history} isLoading={props.isLoading}/>
        </>
    )
}

export default LvtAssistant
