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
  ScaleFade,
  scaleFadeConfig,
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
    <>
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
            onClick={onOpen}
            cursor="pointer"
            transition="all .5s ease"
            _hover={{
              transition: "all .5s",
              transform: "scale(1.1)",
            }}
          />
        </Box>

        <Box
          width="full"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          gap="5"
          transition="all .5s ease"
        >
          <Text
            fontSize="2xl"
            textTransform="capitalize"
            color="whiteAlpha.900"
          >
            {title}
          </Text>
          <Button
            colorScheme="teal"
            color="white"
            _hover={{ bg: "#1A202C" }}
            variant="outline"
            onClick={onOpen}
          >
            Ver Mas
          </Button>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            transition="all .5s ease"
            width="full"
            margin="0"
            py="10"
            bg="gray.900"
          >
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
              transition="all .5s ease"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
              gap="4"
              margin="0 auto"
            >
              <Text
                fontSize="2xl"
                textTransform="capitalize"
                color="whiteAlpha.900"
              >
                descripcion :
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
                Cerrar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};

export default Card;
