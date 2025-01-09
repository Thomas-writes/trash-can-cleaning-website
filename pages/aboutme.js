import { Box, Image, VStack, Stack, Text, Container } from '@chakra-ui/react';

function Aboutme() {
    return (
        <Stack width='100%' justify="space-between" direction={{ sm: 'column', xl: 'row' }}>
            <Container align='center' boxShadow='dark-lg' borderRadius='10px'  bg='green.600' width='80vw' height='fit-content' padding='20px'>
                <Image src='imgs/placeholder.png' width={{base: "70vw", xl: "500px",}} height={{base: "400px", xl: "570px"}}/>
            </Container>
            <Box height='20px'/>
            <Container boxShadow='dark-lg' borderRadius='10px'  bg='blue.600' width='80vw' height='fit-content' paddingBottom='10px'>
                <VStack>
                    <Text cursor="default" color='white' as='b' fontSize={{base: "30px", xl:"40px"}}>
                        Who I am?
                    </Text>
                    <Text cursor="default" color='white' paddingLeft='20px'>
                        I am afhjskldasjd asldk jfhasdkjlf askl jfhaskld jhfaslkdj fhaskldjfhaklsdfjh askldfjh askldf jhasldk hfa
                    </Text>
                </VStack>
            </Container>
            <Box height='20px'/>
            
        </Stack>
    );
}

export default Aboutme;