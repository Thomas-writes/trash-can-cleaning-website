import { Box, Image, HStack, VStack, Stack, Text, Container } from '@chakra-ui/react';
import image from './imgs/placeholder.png'
import phone from './imgs/phoneicon.png'

function Aboutme() {
    return (
        <Stack width='100%' justify="space-between" direction={{ sm: 'column', xl: 'row' }}>
            <Container align='center' boxShadow='dark-lg' borderRadius='10px'  bg='green.600' width='80vw' height='fit-content' padding='20px'>
                <Image src={image} width={{base: "70vw", lg: "500px",}} height={{base: "400px", lg: "570px"}}/>
            </Container>
            <Box height='20px'/>
            <Container boxShadow='dark-lg' borderRadius='10px'  bg='blue.600' width='80vw' height='fit-content' paddingBottom='10px'>
                <VStack>
                    <Text color='white' as='b' fontSize={{base: "30px", lg:"40px"}}>
                        Who I am?
                    </Text>
                    <Text color='white' paddingLeft='20px'>
                        I am afhjskldasjd asldk jfhasdkjlf askl jfhaskld jhfaslkdj fhaskldjfhaklsdfjh askldfjh askldf jhasldk hfa
                    </Text>
                </VStack>
            </Container>
            <Box height='20px'/>
            <VStack width={{base: "100%", lg: "33%",}}>
                <Text as='b' textAlign='left' fontSize={{base: "30px", lg:"40px"}}>
                    Contact Me:
                </Text>
                <Box height='20px'/>
                <Container alignItems ='left' boxShadow='dark-lg' borderRadius='10px'  align='center' width='80vw' bg='green.600' height='fit-content'>
                    <HStack height='fit-content' width={{ sm: '100%', lg: '100%' }}>
                        <Image src={phone} width={{sm: "30%", lg: "150px",}}/>
                        <Box width='20px'/>
                        <Text color='white' fontSize={{sm: "35px", lg: "50px",}}>
                            913-401-9071
                        </Text>
                    </HStack>
                </Container>

            </VStack>
        </Stack>
    );
}

export default Aboutme;