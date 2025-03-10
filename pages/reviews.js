import { Box, Input, Textarea, VStack, Stack, Text, Container, Button } from '@chakra-ui/react';

const Reviews = ({ reviews }) => {
    console.log("reviews state:", reviews);

    const handleClick = async (e) => {
        e.preventDefault();
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var review = document.getElementById("review").value;
        
        if (!fname || !lname || !review) {
            alert('Please fill in all fields.');
            return;
        }
        
        const data = {
            fname,
            lname,
            review,
        };

        const response = await fetch('/api/insertdata', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });



        const result = await response.json();
        if (response.ok) {
            console.log('Data inserted successfully!');
            document.getElementById("fname").value = '';
            document.getElementById("lname").value = '';
            document.getElementById("review").value = '';
            alert('Done');
        } else {
            console.log(result.message || 'Something went wrong.');
            alert('Please try again')
        }
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
            <VStack width={{base: "100%",xl: "50%",}}>
                <Container boxShadow='dark-lg' borderRadius='10px'  bg='blue.600' width='80vw' height='fit-content' padding='10px'>
                    <VStack>
                        <Text cursor="default" color='white'  fontSize={{base: "30px", xl:"40px"}}>
                            All Reviews:
                        </Text>
                        <Box p={4}>
                        {0 > 0 ? (
                            reviews.map((review) => (
                                <Box key={review._id.toString()} mb={4} p={2} border="1px" borderColor="gray.200" borderRadius="md">
                                    <Text fontSize="lg" fontWeight="semibold">
                                        {review.fname} {review.lname}
                                    </Text>
                                    <Text>{review.review}</Text> 
                                </Box>
                            ))
                        ) : (
                            <Text textAlign='left' cursor="default" color='white' fontSize={{base: "20px", xl:"30px"}}>
                                No reviews available.
                            </Text>
                        )}
                        </Box>
                    </VStack>
                </Container>
            </VStack>
        </Stack>
    );
}

export default Reviews;