import React from "react"
import {
    Box,
    Button,
    Flex,
    Icon,
    Text,
    useColorModeValue
  } from '@chakra-ui/react';
  import { AiOutlineHome } from 'react-icons/ai';
  import { FaRobot } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function SideBar (props){
    const {newConversation, ...rest} = props
    return (
        <Box
            as="nav"
            top="0"
            left="0"
            zIndex="sticky"
            h="100vh"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg={useColorModeValue('white', 'gray.800')}
            borderColor={useColorModeValue('inherit', 'gray.700')}
            borderRightWidth="1px"
            w='20%'
            {...rest}
        >
            <Flex px="4" py="5" align="center">
                <Icon as={FaRobot} h={8} w={8} />
                <Text
                    fontSize="2xl"
                    ml="2"
                    color={useColorModeValue('brand.500', 'white')}
                    fontWeight="semibold"
                >
                    ChatUNI
                </Text>
            </Flex>
            <Box
                display='flex'
                justifyContent='center'
            >
                <Link to='/newChat'>
                    <Button
                        bg='#333'
                        color='#fff'
                        sx={{ _hover: { bg: '#555' } }}
                    >
                      + Nueva conversación
                    </Button>
                </Link>
            </Box>
            <Flex direction="column" as="nav" fontSize="md" color="gray.600" aria-label="Main Navigation">
                <Link to='/'>
                    <NavItem icon={AiOutlineHome}>Asistente Virtual UTELVT</NavItem>
                </Link>
                {/* <NavItem icon={AiOutlineHome}>Asistente Virtual PUCESE</NavItem> */}
            </Flex>
            {/* <Box
                display='flex'
                justifyContent='center'
                mt='0.5rem'
                mb='1rem'
            >
                <Link to='/newChat'>
                    <Button
                        bg='#333'
                        color='#fff'
                        sx={{ _hover: { bg: '#555' } }}
                    >
                      + Nueva conversación
                    </Button>
                </Link>
            </Box> */}
            <Text
                fontSize="1.5rem"
                ml="6"
                mt='1rem'
                fontWeight="semibold"
            >
                Historial
            </Text>
            <Box>

            </Box>
        </Box>
    )
}

const NavItem = (props) => {
    const color = useColorModeValue('gray.600', 'gray.300');
  
    const { icon, children } = props;
    return (
      <Flex
        align="center"
        px="4"
        py="3"
        cursor="pointer"
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        color={useColorModeValue('inherit', 'gray.400')}
        _hover={{
          bg: useColorModeValue('gray.100', 'gray.900'),
          color: useColorModeValue('gray.900', 'gray.200')
        }}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: color
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };