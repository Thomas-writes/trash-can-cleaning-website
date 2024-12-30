import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text, Stack, Container, Image, VStack } from '@chakra-ui/react';
import image from './imgs/placeholder.png'

function Overview() {
    return (
        <Stack justify="space-between" width='100%' direction={{ sm: 'column', xl: 'row' }} >
            {/*This is column 1*/}
            <VStack width={{ sm: '100%', lg: '33%' }}>
                <Text as='b' fontSize={{base: "20px", lg: "30px",}}>
                    Plans:
                </Text>
                <Container boxShadow='dark-lg' borderRadius='10px' bg='green.600' width='80vw' height={{base: "15vh", lg: "30vh",}} >
                    <VStack spacing={0}>
                        <Text color='white' align='center'fontSize={{base: "20px", lg: "30px",}}>
                            Initial Cleaning or One-time Cleaning
                        </Text>
                        <Text color='white' mt={{base: "0", lg: "30px",}} align='center' fontSize={{base: "50px", lg: "70px",}}>
                            $25.00
                        </Text>
                        <Text color='white' align='center' mt={{base: "0", lg: "20px",}} fontSize={{base: "18px", lg: "25px",}}>
                            Discounts for multiple cans
                        </Text>
                    </VStack>
                </Container>
                <Box height='20px'/>
                <Container boxShadow='dark-lg' borderRadius='10px'  bg='green.600' width='80vw' height={{base: "15vh", lg: "20vh",}} >
                    <VStack spacing={0}>
                        <Text color='white' align='center'fontSize={{base: "20px", lg: "30px",}}>
                            Monthly Cleaning 
                        </Text>
                        <Text color='white' mt={{base: "0", lg: "30px",}} align='center' fontSize={{base: "50px", lg: "70px",}}>
                            $15.00
                        </Text>
                    </VStack>
                </Container>
            </VStack>
            <Box height='20px' width='0px'/>
            {/*This is column 2*/}
            <VStack width={{ sm: '100%', lg: '33%' }}>
                <Container boxShadow='dark-lg' borderRadius='10px'  align='center' width='80vw' bg='blue.600' height={{base: "35vh", lg: "35vh"}}>
                    <VStack height='50%' width={{ sm: '100%', lg: '50%' }}>
                        <Text color='white' alignContent='center' fontSize={{base: "20px", lg: "30px",}}>
                            Before:
                        </Text>
                        <Image src={image} width={{base: "60%", lg: "80%",}}/>
                    </VStack>
                </Container>
                <Box height='20px'/>
                <Container paddingBottom={{sm: '0', lg: '20px'}} boxShadow='dark-lg' borderRadius='10px'  align='center' width='80vw' bg='blue.600' height={{base: "35vh", lg: "35vh"}}>
                    <VStack height='50%' width={{ sm: '100%', lg: '50%' }}>
                        <Text color='white' fontSize={{base: "20px", lg: "30px",}}>
                            After:
                        </Text>
                        <Image src={image} width={{base: "60%", lg: "80%",}}/>
                    </VStack>
                </Container>
            </VStack>
            {/*This is column 3*/}
            <VStack width={{ sm: '100%', lg: '33%' }}>
                <Text pt={4} pb={4} as='b' fontSize={{base: "30px", lg: "30px",}}>
                    FAQs
                </Text>
                <Accordion width={{ sm: '80%', lg: '100%' }} allowToggle> 
                    <AccordionItem boxShadow='dark-lg' borderRadius='10px'  bg='green.700'>
                        <AccordionButton>
                            <Box textColor='white' as='span' flex='1' textAlign='left'>
                                What is the point in cleaning my trash can?
                            </Box>
                            <AccordionIcon color='white'/>
                        </AccordionButton>
                        <AccordionPanel borderRadius='10px' bg='green.600' textColor='white' pb={4}>
                            Type 
                        </AccordionPanel>
                    </AccordionItem>
                    <Box height='20px'/>
                    <AccordionItem boxShadow='dark-lg' borderRadius='10px'  bg='green.700'>
                        <AccordionButton>
                            <Box textColor='white' as='span' flex='1' textAlign='left'>
                                How did you decide the prices?
                            </Box>
                            <AccordionIcon color='white' />
                        </AccordionButton>
                        <AccordionPanel borderRadius='10px' bg='green.600' textColor='white' pb={4}>
                            Type here..
                        </AccordionPanel>
                    </AccordionItem>
                    <Box height='10px'/>
                </Accordion>
            </VStack>
        </Stack>
    );
}

export default Overview;