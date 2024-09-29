import { Box, Button} from "@chakra-ui/react"
import { FaBars } from "react-icons/fa"

function Header (props){
    const {onOpen} = props
    return (
        <>
            <Box
                className="header-container"
                display='flex'
                height='5%'
            >
                <Button display={{base:'block', md:'none'}} onClick={onOpen}>{<FaBars/>}</Button>
                {props.children}
            </Box>
        </>
    )
}
export default Header