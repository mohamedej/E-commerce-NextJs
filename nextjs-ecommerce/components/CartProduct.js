import {
  Flex,
  HStack,
  IconButton,
  Divider,
  Text,
  Image,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import ConfirmationModal from "/components/ConfirmationModal";
import { useCartContext } from "../context/cartContext";

export default function Product({ product, index }) {
  const { cart, removeItem, addSameItem, removeSameItem } = useCartContext();
  const { onOpen, ...modalProps } = useDisclosure();
  return (
    <>
      <Flex p={4}>
        <Image h={198} src={product.image} />
        <Flex
          flex="1"
          p={6}
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex justifyContent="space-between" flexDirection="row" w="full">
            <Box p={2}>
              <Text fontWeight="bold" mb={2}>
                {product.title}
              </Text>
              <Text fontSize="sm">{product.description}</Text>
            </Box>
            <HStack>
              <IconButton
                icon={<AiOutlinePlus />}
                onClick={() => {
                  addSameItem(product.id);
                }}
              />
              <Text>{product.quantity}</Text>
              <IconButton
                icon={<AiOutlineMinus />}
                isDisabled={product.quantity <= 1}
                onClick={() => {
                  removeSameItem(product.id);
                }}
              />
            </HStack>
          </Flex>
          <Flex justifyContent="space-between" flexDirection="row" w="full">
            <Text>Price : {product.price * product.quantity}$</Text>
            <IconButton
              colorScheme="red"
              rounded="md"
              size="lg"
              icon={<AiFillDelete />}
              onClick={onOpen}
            />
          </Flex>
        </Flex>
      </Flex>
      {cart.length - 1 > index && <Divider my={1} />}
      <ConfirmationModal action={removeItem} id={product.id} {...modalProps} />
    </>
  );
}
