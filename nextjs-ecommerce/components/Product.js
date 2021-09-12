import { Badge, Box, IconButton, Image, useToast } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../context/cartContext";

export default function Product(product) {
  const { imageUrl, productName, price } = product;
  const { addItem } = useCartContext();
  const toast = useToast();
  return (
    <Box
      maxW={44}
      borderWidth="1px"
      borderColor="gray.2 00"
      borderRadius="lg"
      overflow="hidden"
      fontFamily="roboto"
    >
      <Image w={96} h={192} src={imageUrl} />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          fontSize="sm"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {productName}
        </Box>

        <Box fontSize="sm">{price}$</Box>
        <Box textAlign="end">
          <IconButton
            onClick={() => {
              addItem(product);
              toast({
                title: "Item added",
                position: "bottom-right",
                description: "We've added this item to your personal cart.",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            }}
            _hover={{ color: "gray", boxShadow: "none" }}
            icon={<FaShoppingCart />}
          />
        </Box>
      </Box>
    </Box>
  );
}
