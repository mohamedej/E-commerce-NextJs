import { IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Image as NextImage } from "next/image";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useCartContext } from "../../context/cartContext";
import Link from "next/link";
import { Tag, TagLabel } from "@chakra-ui/tag";

export default function PopOverCart({ product, currentIndex, cart }) {
  const { removeItem } = useCartContext();

  return (
    <>
      <Flex
        alignItems="center"
        key={product.id}
        justifyContent="space-between"
        flexDirection="Row"
        p={2}
      >
        <Flex justifyContent="space-evenly" textAlign="start">
          {/* <Flex
            h="full"

            justifyContent="center"
            direction="column"
            alignItems="center"
          > */}
          <Image
            as={NextImage}
            src={product.image}
            boxSize="100px"
            objectFit="scale-down"
            mr={2}
          />
          {/* </Flex> */}
          <VStack justifyContent="flex-start" p={2}>
            <Link href={`/products/${product.id}`}>
              <Text
                _hover={{ color: "orange", cursor: "pointer" }}
                fontSize={10}
                w={28}
                noOfLines={2}
              >
                {product.title}
              </Text>
            </Link>
            <Text w="full" fontWeight="bold">
              ${product.price}
            </Text>
            <HStack w="full">
              <Tag colorScheme="orange">
                <TagLabel color="orange.900">Qty {product.quantity}</TagLabel>
              </Tag>
            </HStack>
          </VStack>
        </Flex>

        <Flex direction="column" justifyContent="flex-end">
          <IconButton
            aria-label="Delete from cart"
            icon={<RiDeleteBin5Fill />}
            colorScheme="red"
            rounded="full"
            variant="solid"
            onClick={() => {
              removeItem(product.id);
            }}
          />
        </Flex>
      </Flex>
      {currentIndex === cart.length - 1 ? null : <Divider />}
    </>
  );
}
