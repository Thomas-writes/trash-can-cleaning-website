import { HStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text, Stack, Container, Image, VStack } from '@chakra-ui/react';

function Overview() {
    return (
        <Stack justify="space-between" width='100%' direction={{ base: 'column', xl: 'row' }} >
            {/*This is column 1*/}
            <VStack width={{ sm: '100%', xl: '33%' }}>
                <Text cursor="default" as='b' fontSize={{base: "20px",xl: "30px",}}>
                    Plans:
                </Text>
                <Container boxShadow='dark-lg' borderRadius='10px' bg='green.600' width='80vw' height={{base: "15vh",xl: "30vh",}} >
                    <VStack spacing={0}>
                        <Text cursor="default" color='white' align='center'fontSize={{base: "18px",xl: "30px",}}>
                            Initial Cleaning or One-time Cleaning
                        </Text>
                        <Text cursor="default" color='white' mt={{base: "0",xl: "30px",}} align='center' fontSize={{base: "50px",xl: "70px",}}>
                            $25.00
                        </Text>
                        <Text cursor="default" color='white' align='center' mt={{base: "0",xl: "20px",}} fontSize={{base: "16px",xl: "25px",}}>
                            Discounts for multiple cans
                        </Text>
                    </VStack>
                </Container>
                <Box height='20px'/>
                <Container boxShadow='dark-lg' borderRadius='10px'  bg='green.600' width='80vw' height={{base: "15vh",xl: "20vh",}} >
                    <VStack spacing={0}>
                        <Text cursor="default" color='white' align='center'fontSize={{base: "18px",xl: "30px",}}>
                            Monthly Cleaning (per can)
                        </Text>
                        <Text cursor="default" color='white' mt={{base: "0",xl: "30px",}} align='center' fontSize={{base: "50px",xl: "70px",}}>
                            $15.00
                        </Text>
                    </VStack>
                </Container>
            </VStack>
            <Box height='20px' width='0px'/>
            {/*This is column 2*/}
            <VStack width={{ sm: '100%',xl: '33%' }}>
                <Container boxShadow='dark-lg' borderRadius='10px'  align='center' width='80vw' bg='blue.600' height={{base: "35vh",xl: "35vh"}}>
                    <VStack height='50%' width={{ sm: '100%',xl: '50%' }}>
                        <Text cursor="default" color='white' alignContent='center' fontSize={{base: "20px",xl: "30px",}}>
                            Before:
                        </Text>
                        <Image src='imgs/placeholder.png' width={{base: "60%",xl: "80%",}}/>
                    </VStack>
                </Container>
                <Box height='20px'/>
                <Container paddingBottom={{sm: '0',xl: '20px'}} boxShadow='dark-lg' borderRadius='10px'  align='center' width='80vw' bg='blue.600' height={{base: "35vh",xl: "35vh"}}>
                    <VStack height='50%' width={{ sm: '100%',xl: '50%' }}>
                        <Text cursor="default" color='white' fontSize={{base: "20px",xl: "30px",}}>
                            After:
                        </Text>
                        <Image src='imgs/placeholder.png' width={{base: "60%",xl: "80%",}}/>
                    </VStack>
                </Container>
            </VStack>
            {/*This is column 3*/}
            <VStack width={{ sm: '100%',xl: '33%' }}>
                <Text cursor="default" pt={4} pb={4} as='b' fontSize={{base: "30px",xl: "40px",}}>
                    FAQs
                </Text>
                <Accordion width={{ sm: '80%',xl: '100%' }} allowToggle> 
                    <AccordionItem boxShadow='dark-lg' borderRadius='10px'  bg='green.700'>
                        <AccordionButton>
                            <Box textColor='white' as='span' flex='1' textAlign='left'>
                                What is the point in cleaning my trash can?
                            </Box>
                            <AccordionIcon color='white'/>
                        </AccordionButton>
                        <AccordionPanel cursor="default" borderRadius='10px' bg='green.600' textColor='white' pb={4}>
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
                        <AccordionPanel cursor="default" borderRadius='10px' bg='green.600' textColor='white' pb={4}>
                            Type here..
                        </AccordionPanel>
                    </AccordionItem>
                    <Box height='10px'/>
                </Accordion>
                <VStack width='100%'>
                    <Text cursor="default" pt={4} pb={4} as='b' fontSize={{base: "30px",xl: "40px",}}>
                        Contact Me:
                    </Text>
                    <Box height='20px'/>
                    <Container alignItems ='left' boxShadow='dark-lg' borderRadius='10px'  align='center' width='80vw' bg='green.600' height='fit-content'>
                        <HStack height='fit-content' width={{ sm: '100%', xl: '100%' }}>
                            <Image src="/imgs/phoneicon.png" alt="Phone Icon" width={{sm: "30%", xl: "150px",}}/>
                            <Box width='20px'/>
                            <Text cursor="default" color='white' fontSize={{sm: "30px", xl: "50px",}}>
                                913-401-9071
                            </Text>
                        </HStack>
                    </Container>
                </VStack>
            </VStack>
        </Stack>
    );
}

export default Overview;