import { Box, Text } from "@chakra-ui/react"

function Header (){
    return (
        <>
            <Box
                className="header-container"
            >
                <Text
                    fontSize='1.5rem'
                    fontWeight='700'
                    padding='1rem'
                >Chat_U</Text>
            </Box>
        </>
    )
}
export default Header