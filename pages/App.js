import { VStack, Text, ChakraProvider, extendTheme, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Overview from './overview';
import Aboutme from './aboutme';
import Reviews from './reviews';
import '@fontsource/poppins/400.css';


const theme = extendTheme({
  fonts: {
    body: "'Poppins', sans-serif"
  },
  styles: {
    global: {
      "*:focus": {
        border: "0 0 0 2px transparent !important",
        boxShadow: "0 0 0 2px transparent !important",
      }
    },
  },
});

function App() {
  return (
    <ChakraProvider theme = {theme}>
      <VStack spacing={0}>
        {/*title*/}
        <Text cursor="default" align='center' width='100%' as='b' color = 'white' bg = 'green.800' fontSize={{base: "40px", md: "60px", lg: "80px",}}>
          J Good's Can Cleaning
        </Text>
        {/*tabs under the title*/}
        <Tabs height='10vh' width='100%' variant='solid'>
          <TabList>
            <Tab color = 'white' bg = 'green.700' _selected={{ color: 'white', bg: 'blue.600' }} fontSize={{base: "20px", md: "30px", lg: "40px",}} width='33vw'>Overview</Tab>
            <Tab color = 'white' bg = 'green.700' _selected={{ color: 'white', bg: 'blue.600' }} fontSize={{base: "20px", md: "30px", lg: "40px",}} width='34vw'>Reviews</Tab>
            <Tab color = 'white' bg = 'green.700' _selected={{ color: 'white', bg: 'blue.600' }} fontSize={{base: "20px", md: "30px", lg: "40px",}} width='33vw'>About Me</Tab>
          </TabList>
          <TabPanels>
            {/*made tabs seperate files for better organization */}
            <TabPanel>
              <Overview/>
            </TabPanel>
            <TabPanel>
              <Reviews/>
            </TabPanel>
            <TabPanel>
              <Aboutme/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
