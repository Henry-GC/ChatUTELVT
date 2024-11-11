import { Avatar, Box, Text } from "@chakra-ui/react";


export default function LandingChat () {
    return (
        <>
            <Box
                display='flex'
                flexDirection='column'
                height='100%'
                alignItems='center'
                justifyContent='center'
            >
                <Avatar size="2x1" name="User message" src="/multimedia/avatar_bot.png"/>
                <Text
                    fontSize='3rem'
                    fontWeight='700'
                >CHAT LVT</Text>
                <Text
                    fontFamily="Hi Melody"
                    fontSize="2rem"
                >Innovando la Universidad</Text>
            </Box>
        </>
    )
}