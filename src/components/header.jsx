import { Box, Button, Text } from "@chakra-ui/react"

function Header ({onOpen}){
    return (
        <>
            <Box
                className="header-container"
                display='flex'
            >
                <Button display={{base:'block', md:'none'}} onClick={onOpen}> Open </Button>
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