import { VStack, Text, ChakraProvider, extendTheme, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Home from './home';

const theme = extendTheme({
  fonts: {
    body: "Helvetica, sans-serif"
  },
});

function App() {
  return (
    <ChakraProvider theme = {theme}>
      <VStack spacing={0}>
        {/*title*/}
        <Text align='center' width='100vw' as='b' color = 'white' bg = 'green.800' fontSize={{
          base: "40px",
          md: "60px",
          lg: "80px",
        }}>
          J Good's Can Cleaning
        </Text>
        {/*tabs under the title*/}
        <Tabs height='10vh' width='100vw' variant='solid'>
          <TabList>
            <Tab color = 'white' bg = 'green.700' _selected={{ color: 'white', bg: 'blue.600' }} fontSize={{base: "20px", md: "30px", lg: "40px",}} width='33vw'>Overview</Tab>
            <Tab color = 'white' bg = 'green.700' _selected={{ color: 'white', bg: 'blue.600' }} fontSize={{base: "20px", md: "30px", lg: "40px",}} width='34vw'>Reviews</Tab>
            <Tab color = 'white' bg = 'green.700' _selected={{ color: 'white', bg: 'blue.600' }} fontSize={{base: "20px", md: "30px", lg: "40px",}} width='33vw'>About Me</Tab>
          </TabList>
          <TabPanels>
            {/*made pages a seperate files for better organization */}
            <TabPanel>
              <Home/>
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
