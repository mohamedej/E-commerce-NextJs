import {
  Badge,
  Box,
  IconButton,
  Image,
  useToast,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../context/cartContext";
import ProductModal from "../components/ProductModal";

export default function Product(product) {
  const { onOpen, ...modalProps } = useDisclosure();
  const { image, title, price, id } = product;
  const { addItem } = useCartContext();
  const toast = useToast();

  return (
    <>
      <Box
        w={80}
        m="auto"
        my={4}
        borderWidth="1px"
        borderColor="gray.2 00"
        borderRadius="lg"
        overflow="hidden"
        fontFamily="roboto"
      >
        <Flex
          p={6}
          w="full"
          alignItems="center"
          justifyContent="center"
          onClick={onOpen}
        >
          <Image h={60} src={image} />
        </Flex>
        <Box p={6}>
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            fontSize="8px"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {title}
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
              _hover={{ color: "orange", boxShadow: "none" }}
              icon={<FaShoppingCart />}
            />
          </Box>
        </Box>
      </Box>
      <ProductModal product={product} {...modalProps} />
    </>
  );
}
