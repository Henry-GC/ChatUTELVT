import React, { useContext, useEffect, useRef } from "react"
import {
    Box,
    Flex,
    Icon,
    Text,
    useColorModeValue
  } from '@chakra-ui/react';
  import { AiOutlineHome } from 'react-icons/ai';
  import { FaRobot, FaPlus } from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";
import { historyContext } from "./Context/historyContext"

export default function SideBar (props){
    const {newConversation, ...rest} = props
    const historyRef = useRef(null)
    const {history} = useContext(historyContext)
    const location = useLocation()

    // useEffect(() => {
    //   if (historyRef.current) {
    //     historyRef.current.scrollTo({
    //       top: historyRef.current.scrollHeight,
    //       behavior: 'smooth'
    //     });
    //   }
    // }, [history]);

    return (
        <Box
            as="nav"
            top="0"
            left="0"
            zIndex="sticky"
            maxH="100vh"
            pb="10"
            overflowX="hidden"
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
                    ChatLVT
                </Text>
            </Flex>
            <Flex direction="column" as="nav" fontSize="md" color="gray.600" aria-label="Main Navigation">
                <Link to='/'>
                    <NavItem icon={FaPlus} isActive={location.pathname === '/'}>Nueva conversación</NavItem>
                </Link>
                <Link to='/asistente'>
                    <NavItem icon={AiOutlineHome} isActive={location.pathname === '/asistente'}>Asistente Virtual UTELVT</NavItem>
                </Link>
            </Flex>
            <Text
                fontSize="1.5rem"
                ml="6"
                mt='1rem'
                fontWeight="semibold"
            >
                Historial
            </Text>
            <Flex
                direction='column-reverse'
                as="nav"
                fontSize="md" 
                color="gray.600" 
                aria-label="Main Navigation"
                overflowY='scroll'
                maxHeight='70%'
                ref={historyRef}
                sx={{
                  '&::-webkit-scrollbar': {
                      width: '6px',
                  },
                  '&::-webkit-scrollbar-thumb': {
                      background: useColorModeValue('#CBD5E0', '#4A5568'),
                      borderRadius: '10px',
                  },
                  '&::-webkit-scrollbar-thumb:hover': {
                      background: useColorModeValue('#A0AEC0', '#2D3748'),
                  },
              }}
            >
                {history.map((conversation,index)=>(
                    <Link to={`/chat/${conversation.conversationId}`} key={index}>
                        <NavItem isActive={location.pathname === `/chat/${conversation.conversationId}`}>{conversation.title}</NavItem>
                    </Link>
                ))}
            </Flex>
        </Box>
    )
}

const NavItem = (props) => {
    const { icon, children, isActive } = props;
    const color = useColorModeValue('gray.600', 'gray.300');
    const activeBg = useColorModeValue('gray.100', 'gray.900')
    const activeColor = useColorModeValue('gray.900', 'gray.400')
    const inactiveColor = useColorModeValue('inherit', 'gray.400')
  
    return (
      <Flex
        align="center"
        px="4"
        py="3"
        cursor="pointer"
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        bg={isActive ? activeBg : 'transparent'}
        color={isActive ? activeColor : inactiveColor}
        _hover={{
          bg: activeBg,
          color: activeColor
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