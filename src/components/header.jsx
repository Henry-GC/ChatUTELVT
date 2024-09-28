import { Box, Button, IconButton, Text, Select } from "@chakra-ui/react"
import { FaBars } from "react-icons/fa"

function Header ({onOpen}){

    const isNew = false

    return (
        <>
            <Box
                className="header-container"
                display='flex'
                height='5%'
            >
                <Button display={{base:'block', md:'none'}} onClick={onOpen}>{<FaBars/>}</Button>
                <>
                {isNew?(
                <Box
                    width='fit-content'
                >
                    <Select
                        fontWeight='600'
                        sx={{
                            width: 'fit-content'
                        }}
                    >
                        <option defaultValue>LLAMA 3.1</option>
                        <option>Groq</option>
                    </Select>
                </Box>):(<>
                    <Text
                        fontSize='1.2rem'
                        fontWeight='700'
                        margin='auto 1rem'
                    >Asistente virtual UTELVT</Text>
                </>)}
                </>
            </Box>
        </>
    )
}
export default Header