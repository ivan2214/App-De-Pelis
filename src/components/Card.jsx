import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Card = ({ title, id, overview, poster_path }) => {
  const getPosterUrl = (posterPatch) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPatch}`;
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      overflow="hidden"
      gap="8"
      p="10"
    >
      <Box width="full" shadow="dark-lg">
        <Image
          borderRadius="2xl"
          width="full"
          objectFit="cover"
          src={getPosterUrl(poster_path)}
          alt=""
        />
      </Box>

      <Box
        width="full"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        gap="5"
      >
        <Text fontSize="2xl" textTransform="capitalize" color="whiteAlpha.900">
          {title}
        </Text>
        <Button
          colorScheme="teal"
          color="white"
          _hover={{ bg: "#1A202C" }}
          variant="outline"
          onClick={onOpen}
        >
          Button
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.900">
          <Box width="full">
            <Image
              margin="0 auto"
              width="44"
              objectFit="cover"
              src={getPosterUrl(poster_path)}
              alt=""
            />
          </Box>
          <Text
            margin="0 auto"
            py="6"
            fontSize="3xl"
            textTransform="capitalize"
            color="whiteAlpha.900"
          >
            {title}
          </Text>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            gap="4"
          >
            <Text
              fontSize="2xl"
              textTransform="capitalize"
              color="whiteAlpha.900"
            >
              Description :
            </Text>

            <Text textTransform="capitalize" color="whiteAlpha.700">
              {overview}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              color="white"
              _hover={{ bg: "#1A202C" }}
              variant="outline"
              onClick={onClose}
            >
              View more
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Card;
