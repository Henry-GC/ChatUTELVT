import React from "react"
import { Box, Button, Text } from "@chakra-ui/react"

function SideBar (){
    return (
        <>
            <Box
                display='flex'
                flexDirection='column'
                className="side-bar"
                width='20%'
                padding='1rem'
                gap='1rem'
            >
                <Text
                    fontSize='1.5rem'
                    fontWeight='700'
                >Conversaciones</Text>
                <Button
                    bg='#333'
                    color='#fff'
                    sx={{_hover:{bg:'#555'}}}
                >
                    + Nueva Conversación
                </Button>
                <Box>
                    aqui van las conversaciones
                </Box>
            </Box>
        </>
    )
}
export default SideBar