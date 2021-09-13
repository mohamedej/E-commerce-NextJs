import { Image } from "@chakra-ui/image";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import { Image as NextImage } from "next/image";
import { StarIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";
import { useCartContext } from "../../context/cartContext";
import { useToast } from "@chakra-ui/toast";
import Link from "next/link";

export default function ProductPage({ products }) {
  const { addItem } = useCartContext();
  const toast = useToast();
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      h="full"
      backgroundImage="linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1)) , url(/bg.jpg)"
    >
      <HStack shadow="lg" rounded="lg" p={4} spacing={12} bg="white">
        <Box w={240}>
          <Image src={products.image} as={NextImage} />
        </Box>
        <VStack w={420} spacing={12} textAlign="center">
          <Text
            fontSize="2xl"
            fontWeight="bold"
            borderBottom="1px"
            borderColor="orange.200"
          >
            {products.title}
          </Text>
          <VStack>
            <Text fontWeight="bold"> Description </Text>
            <Text fontSize="sm">{products.description}</Text>
          </VStack>

          <Flex justifyContent="space-between" w="full">
            <HStack alignItems="start" textAlign="center">
              <StarIcon color="orange" />
              <Text fontWeight="bold" fontSize="sm">
                {products.rating.rate}
              </Text>
            </HStack>

            <Text fontWeight="bold">
              <span style={{ color: "orange" }}> Price:</span> {products.price}$
            </Text>
          </Flex>
          <Flex justifyContent="space-between" w="full">
            <Link href="/">
              <Button w={16} rounded="sm" fontWeight="extrabold">
                Back
              </Button>
            </Link>

            <Button
              colorScheme="orange"
              w={24}
              rounded="sm"
              fontWeight="extrabold"
              onClick={() => {
                addItem(products);
                toast({
                  title: "Item added",
                  position: "bottom-right",
                  description: "We've added this item to your personal cart.",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              }}
            >
              Buy
            </Button>
          </Flex>
        </VStack>
      </HStack>
    </Flex>
  );
}

// export async function getStaticPaths() {
//     const res = await fetch('https://fakestoreapi.com/products')
//     const items = await res.json()

//     const paths = items.map((product) => ({
//         params: {item: product.item}
//     }))

//     return{
//         paths
//     }
// }

export async function getServerSideProps({ query: { productId } }) {
  if (productId) {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const products = await res.json();
    return {
      props: {
        products,
      },
    };
  }
}
