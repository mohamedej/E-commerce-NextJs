import {
  Box,
  Flex,
  Link as ChakraLink,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import PopOver from "../PopOver";

export default function Nav() {
  return (
    <Flex w="full" px={12} pt={2} alignItems="center" bg="gray.100">
      <Box flex="1">
        <InputGroup variant="flushed">
          <InputLeftElement
            pointerEvents="none"
            children={<BsSearch color="gray.300" />}
          />
          <Input type="tel" placeholder="Search" disabled />
        </InputGroup>
      </Box>
      <Stack
        direction="row"
        spacing={8}
        fontSize="md"
        fontWeight="bold"
        flex="1"
        justifyContent="center"
      >
        <Link href="/">
          <Text _hover={{ color: "orange", cursor: "pointer" }}> Products</Text>
        </Link>
        <Link href="/about">
          <Text _hover={{ color: "orange", cursor: "pointer" }}> About us</Text>
        </Link>
      </Stack>
      <Flex flex="1" justify="flex-end" position="relative">
        <PopOver />
      </Flex>
    </Flex>
  );
}
