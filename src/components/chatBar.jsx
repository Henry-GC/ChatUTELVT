import { Button, Box } from "@chakra-ui/react"

export const ChatBar = ({handleChange,handleSubmit,query,isLoading}) => {
    return(
        <>
            <Box
                display='flex'
                width='100%'
                height='10%'
                padding='1rem'
                alignItems='center'
            >
                <form onSubmit={handleSubmit} style={{ display: 'flex', width: '100%' }}>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={query}
                        placeholder="Escribe tu pregunta..."
                        style={{
                            flexGrow: 1,
                            marginRight: '0.5rem',
                            padding: '0.2rem 0.5rem',
                            border: 'solid 1px #aaa',
                            borderRadius: '0.5rem'
                        }}
                        disabled={isLoading}
                    />
                    <Button
                        type="submit"
                        width="100px"
                        bg='#333'
                        color='#fff'
                        sx={{ _hover: { bg: '#555' } }}
                        isLoading={isLoading}
                    >
                        ENVIAR
                    </Button>
                </form>
            </Box>
        </>
    )
}