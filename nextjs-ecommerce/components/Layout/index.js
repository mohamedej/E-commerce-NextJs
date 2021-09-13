import { Box, Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <Flex flexDirection="column" w="full" h="100vh">
      <Nav />
      <Box flex="1">{children}</Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
