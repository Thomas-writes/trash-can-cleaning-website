import { VStack, Text, ChakraProvider, extendTheme, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: "Helvetica, sans-serif"
  },
});

function App() {
  return (
    <ChakraProvider theme = {theme}>
      <VStack>
        \\ title
        <Text as='b' color = 'whiteAlpha.100' bg = 'blue.500' fontSize={{
          base: "40px",
          md: "60px",
          lg: "80px",
        }}>
          J Good's Can Cleaning
        </Text>
        \\ 
        <Tabs height='10vh' width='100vw' variant='solid'>
          <TabList>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }} fontSize={{base: "20px", md: "30px", lg: "40px",}} width='33vw'>Home</Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }} fontSize={{base: "20px", md: "30px", lg: "40px",}} width='33vw'>Reviews</Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }} fontSize={{base: "20px", md: "30px", lg: "40px",}} width='33vw'>About Me</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Render Home Page</p>
            </TabPanel>
            <TabPanel>
              <p>Render Reviews</p>
            </TabPanel>
            <TabPanel>
              <p>Render About Me</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
