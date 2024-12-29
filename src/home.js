import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text, Stack, Container, Image, HStack, VStack } from '@chakra-ui/react';

function Home() {
    return (
        <Stack justify="space-between" direction={{ sm: 'column', lg: 'row' }} >
            <VStack width={{ sm: '100%', lg: '33%' }}>
                <Text as='b' fontSize={{base: "20px", lg: "30px",}}>
                    Plans:
                </Text>
                <Container bg='green.600' width='80vw' height={{base: "15vh", lg: "30vh",}} >
                    <VStack spacing={0}>
                        <Text color='white' align='center'fontSize={{base: "20px", lg: "30px",}}>
                            Initial cleaning or one time cleaning
                        </Text>
                        <Text color='white' mt={{base: "1px", lg: "60px",}} align='center' fontSize={{base: "50px", md: "60px",}}>
                            $25.00
                        </Text>
                        <Text color='white' align='center'fontSize={{base: "18px", lg: "30px",}}>
                            Discounts for multiple cans
                        </Text>
                    </VStack>
                </Container>
                <Container bg='green.600' width='80vw' height={{base: "15vh", lg: "30vh",}} >
                    <HStack>
                        <Image/>
                        <Text color='white'>
                            2nd Plan
                        </Text>
                    </HStack>
                </Container>
            </VStack>
            <VStack width={{ sm: '100%', lg: '33%' }}>
                <VStack height='50%' width={{ sm: '100%', lg: '50%' }}>
                    <Text as='b' fontSize={{base: "20px", lg: "30px",}}>
                        Before:
                    </Text>
                    <Image>

                    </Image>
                </VStack>
                <VStack height='50%' width={{ sm: '100%', lg: '50%' }}>
                    <Text as='b' fontSize={{base: "20px", lg: "30px",}}>
                        After:
                    </Text>
                    <Image>
                        
                    </Image>
                </VStack>
            </VStack>
            <VStack width={{ sm: '100%', lg: '33%' }}>
                <Text  as='b' fontSize={{base: "20px", lg: "30px",}}>
                    FAQS
                </Text>
                <Accordion width='100%' allowToggle> 
                    <AccordionItem>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                                What is the point in cleaning my trash can?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            Type 
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                                How did you decide the prices?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            Type here..
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </VStack>
        </Stack>
    );
}

export default Home;