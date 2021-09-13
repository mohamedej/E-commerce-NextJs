import {
  Box,
  Flex,
  IconButton,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Button,
} from "@chakra-ui/react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import NextLink from "next/link";
import { useCartContext } from "../context/cartContext";
import React from "react";

export default function NavCart() {
  const { cart } = useCartContext();
  const initRef = React.useRef();
  return (
    <Popover placement="auto" initialFocusRef={initRef}>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Box>
              <IconButton
                _hover={{ color: "gray" }}
                _focus={{ boxShadow: "none" }}
                rounded="full"
                icon={<RiShoppingCart2Fill />}
              />
              <Flex
                justify="center"
                alignItems="center"
                position="absolute"
                bg="red.400"
                rounded="full"
                top="0"
                right="0"
                p={0.5}
                width="16px"
              >
                <Text fontSize="8px" color="white">
                  {cart.length}
                </Text>
              </Flex>
            </Box>
          </PopoverTrigger>
          <PopoverContent fontSize="sm" w={56}>
            <PopoverHeader fontWeight="semibold" textAlign="center">
              Shopping Cart
            </PopoverHeader>
            <PopoverBody height="400px" overflowY="auto">
              {cart.length <= 0 ? (
                <Text>Cart is empty</Text>
              ) : (
                cart.map((product) => (
                  <Flex
                    alignItems="center"
                    key={product.id}
                    justifyContent="space-evenly"
                    p={2}
                  >
                    <Image w={20} src={product.image} />
                    <Box>
                      <Text>{product.productName}</Text>
                      <Text>{product.price}$</Text>
                      <Text>{product.quantity}</Text>
                    </Box>
                  </Flex>
                ))
              )}
            </PopoverBody>
            <PopoverFooter justifyContent="center" alignItems="center">
              <NextLink href="/cart">
                <Button onClick={onClose} colorScheme="orange">
                  {" "}
                  Open Cart{" "}
                </Button>
              </NextLink>
            </PopoverFooter>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
}
