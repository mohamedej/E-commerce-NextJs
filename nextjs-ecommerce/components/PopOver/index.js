import {
  Box,
  Flex,
  IconButton,
  VStack,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Button,
} from "@chakra-ui/react";
import { RiShoppingCart2Fill, RiDeleteBin5Fill } from "react-icons/ri";
import NextLink from "next/link";
import { useCartContext } from "../../context/cartContext";
import React from "react";
import PopOverCart from "./PopOverCartItem";

export default function NavCart() {
  const { cart, totalPrice } = useCartContext();
  const initRef = React.useRef();
  return (
    <Popover placement="auto">
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
          <PopoverContent fontSize="sm" w={80}>
            <PopoverHeader fontWeight="semibold" textAlign="center">
              Shopping Cart
            </PopoverHeader>
            <PopoverBody height="350px" overflowY="auto">
              {cart.length <= 0 ? (
                <Text>Cart is empty</Text>
              ) : (
                cart.map((product, index) => (
                  <PopOverCart
                    key={index}
                    product={product}
                    currentIndex={index}
                    cart={cart}
                  />
                ))
              )}
            </PopoverBody>
            <PopoverFooter
              as={VStack}
              justifyContent="center"
              alignItems="center"
            >
              <Flex
                w="full"
                justifyContent="space-between"
                fontSize="12px"
                mb={2}
              >
                <Text fontWeight="bold">
                  {cart.length} {cart.length > 1 ? "items" : "item"}
                </Text>
                <VStack>
                  <Text>Cart Total:</Text>
                  <Text fontWeight="bold">${totalPrice}</Text>
                </VStack>
              </Flex>
              <NextLink href="/cart">
                <Button
                  w={60}
                  onClick={onClose}
                  colorScheme="orange"
                  rounded="none"
                >
                  Open Cart
                </Button>
              </NextLink>
            </PopoverFooter>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
}
