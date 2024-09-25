import {
  Box,
  Flex,
  Icon,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue
} from '@chakra-ui/react';
import { AiOutlineTeam, AiOutlineHome } from 'react-icons/ai';
import { BsFolder2, BsCalendarCheck } from 'react-icons/bs';
import { RiFlashlightFill } from 'react-icons/ri';
import Main from './main';

export default function Landing() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box display='flex' bg={useColorModeValue('gray.50', 'gray.700')} minH="100vh" maxW='100vw'>
      <SidebarContent display={{ base: 'none', md: 'unset' }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box w='100%' height='100vh' ml={{ base: 0, md: 0 }} transition=".3s ease">
        <Main onOpen={onOpen} isOpen={isOpen}/>
      </Box>
    </Box>
  );
}

const SidebarContent = (props) => (
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
    {...props}
  >
    <Flex px="4" py="5" align="center">
      <Icon as={RiFlashlightFill} h={8} w={8} />
      <Text
        fontSize="2xl"
        ml="2"
        color={useColorModeValue('brand.500', 'white')}
        fontWeight="semibold"
      >
        POS
      </Text>
    </Flex>
    <Flex direction="column" as="nav" fontSize="md" color="gray.600" aria-label="Main Navigation">
      <NavItem icon={AiOutlineHome}>Dashboard</NavItem>
      <NavItem icon={AiOutlineTeam}>Team</NavItem>
      <NavItem icon={BsFolder2}>Projects</NavItem>
      <NavItem icon={BsCalendarCheck}>Calendar</NavItem>
    </Flex>
  </Box>
);

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
