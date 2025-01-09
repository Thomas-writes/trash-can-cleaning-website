import { Box, Input, Textarea, VStack, Stack, Text, Container, Button } from '@chakra-ui/react';

function Reviews() {

    const handleClick = () => {
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var review = document.getElementById("review").value;
        
        if (!fname || !lname || !review) {
            alert('Please fill in all fields.');
            return;
        }

        document.getElementById("fname").value = '';
        document.getElementById("lname").value = '';
        document.getElementById("review").value = '';
        alert('Values stored');
      };

    return (
        <Stack width='100%' justify="space-between" direction={{ sm: 'column', xl: 'row' }}>
            <VStack align='center' width={{base: "100%",xl: "50%",}}>
                <Container align='center' boxShadow='dark-lg' borderRadius='10px'  bg='green.600' width='80vw' padding='10px'>
                    <Text cursor="default" color='white' align='center' mt={{base: "10px",xl: "20px",}} mb={{base: "10px",xl: "20px",}} fontSize={{base: "40px",xl: "60px",}}>
                        Enter A Review
                    </Text>
                </Container>
                <Box height='15px'/>
                <Container  boxShadow='dark-lg' borderRadius='10px'  bg='green.600' width='80vw' padding='10px'>
                    
                    <Text cursor="default" color='white'  _placeholder={{color: 'gray.400'}} fontSize={{base: "25px", xl:"35px"}}>
                        First Name:
                    </Text>
                    <Input id='fname' outlineOffset='-2px' outlineColor='black' fontSize={{base: "20px", xl: "30px"}} textColor='white' resize='none' paddingLeft='4px' _placeholder={{color: 'gray.400'}} placeholder="Enter first name here..." height="fit-content" />
                    <Box height={{base: '5px', xl:'10px'}}/>
                    <Text cursor="default" color='white'  fontSize={{base: "25px", xl:"35px"}}>
                        Last Name:
                    </Text>
                    <Input id='lname' outlineOffset='-2px' outlineColor='black' fontSize={{base: "20px", xl: "30px"}} textColor='white' resize='none' paddingLeft='4px' _placeholder={{color: 'gray.400'}} placeholder="Enter last name here..." height="fit-content" />
                    <Box height={{base: '10px', xl:'10px'}}/>
                    <Text cursor="default" color='white'  fontSize={{base: "25px", xl:"35px"}}>
                        Review:
                    </Text>
                    <Textarea id='review' border='none' outlineOffset='-2px' outlineColor='black' fontSize={{base: "20px", xl: "30px"}} textColor='white' resize='none' paddingLeft='4px' _placeholder={{color: 'gray.400'}} placeholder="Type review here..." height="fit-content" overflowY="auto" />
                    <Box height={{base: '10px', xl:'20px'}}/>
                    <Button onClick={handleClick} cursor="pointer" _hover={{bg:'black'}}as='b' padding={{base: '5px', xl:'5px'}} height='fit-content' fontSize={{base: "15px",xl: "25px",}} align='left' color='white' bg='blue.600'>
                        Submit Review
                    </Button>
                </Container>
            </VStack>
            <Box height='40px'/>
            <VStack align='center' width={{base: "100%",xl: "50%",}}>
                <Container boxShadow='dark-lg' borderRadius='10px'  bg='blue.600' width='80vw' height='fit-content' padding='10px'>
                    <VStack>
                        <Text cursor="default" color='white'  fontSize={{base: "30px", xl:"40px"}}>
                            All Reviews:
                        </Text>
                    </VStack>
                </Container>
            </VStack>
        </Stack>
    );
}

export default Reviews;