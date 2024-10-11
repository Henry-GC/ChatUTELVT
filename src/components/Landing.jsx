import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue,
  DrawerCloseButton,
  DrawerBody
} from '@chakra-ui/react';
import Main from './main';
import SideBar from './sidebar';

export default function Landing() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box display='flex' bg={useColorModeValue('gray.50', 'gray.700')} minH="100vh" maxW='100vw'>
      <SideBar display={{ base: 'none', md: 'unset' }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerBody>
            <SideBar w="full" borderRight="none"/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box w='100%' height='100vh' transition=".3s ease">
        <Main onOpen={onOpen} isOpen={isOpen}/>
      </Box>
    </Box>
  );
}
