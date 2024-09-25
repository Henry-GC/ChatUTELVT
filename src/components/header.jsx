import { Box, Button, IconButton, Text } from "@chakra-ui/react"
import { FaBars } from "react-icons/fa"

function Header ({onOpen}){
    return (
        <>
            <Box
                className="header-container"
                display='flex'
                height='5%'
            >
                <Button display={{base:'block', md:'none'}} onClick={onOpen}>{<FaBars/>}</Button>
                <Text
                    fontSize='1.2rem'
                    fontWeight='700'
                    margin='auto 1rem'
                >Asistente virtual UTELVT</Text>
            </Box>
        </>
    )
}
export default Header