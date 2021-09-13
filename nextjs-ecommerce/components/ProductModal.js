import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";

export default function ProductModal({ isOpen, onClose, action, product }) {
  const { description, price, title, image, id } = product;
  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>

          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" alignItems="center" p={2}>
              <Image w={264} src={image} my={2} />
              <Text fontSize="sm" fontWeight="light" my="1rem">
                {description}
              </Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Flex justifyContent="space-between" alignItems="center" w="full">
              <Text>Price : {price} $</Text>

              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
