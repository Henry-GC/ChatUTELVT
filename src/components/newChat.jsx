import Header from "./header";
import Chat from "./chat";
import { Select } from "@chakra-ui/react";

export default function NewChat (props) {
    return(
        <>
            <Header isOpen={props.isOpen} onOpen={props.onOpen}>
                <Select
                    fontSize='1rem'
                    fontWeight='700'
                    margin='auto 1rem'
                    width='fit-content'
                >
                    <option defaultValue>LLaMa 3.1</option>
                    <option>Groq</option>
                </Select>
            </Header>
            <Chat imgBg='none' history={props.history} isLoading={props.isLoading}/>
        </>
    )
}
