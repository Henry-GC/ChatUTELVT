import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue
} from '@chakra-ui/react';
import Main from './main';
import SideBar from './sidebar';
import { useState } from 'react';

export default function Landing() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isNew, setIsNew] = useState(false)
  const [isChat, setIsChat] = useState(false)

  const newConversation = () => {
    setIsChat(true)
  }

  return (
    <Box display='flex' bg={useColorModeValue('gray.50', 'gray.700')} minH="100vh" maxW='100vw'>
      <SideBar display={{ base: 'none', md: 'unset' }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SideBar w="full" borderRight="none" newConversation={newConversation}/>
        </DrawerContent>
      </Drawer>
      <Box w='100%' height='100vh' ml={{ base: 0, md: 0 }} transition=".3s ease">
        <Main onOpen={onOpen} isOpen={isOpen} isChat={isChat}/>
      </Box>
    </Box>
  );
}
