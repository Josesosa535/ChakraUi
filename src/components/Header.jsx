import { Box, Center, Text, Button, Image } from "@chakra-ui/react";

function Header() {
  return (
    <Center height="100vh">
      <Box textAlign="center">
        <Image
          src="https://www.viajesrebajados.com/wp-content/uploads/2019/08/tours-santa-marta-portada.png"
          alt="Sample Image"
        />
        <Text fontSize="xl" fontWeight="bold" mt={4}>
          Tour a Santa Marta...
        </Text>
        <Button mt={4} colorScheme="blue">
          Ver detalles
        </Button>

        <Button mt={4} colorScheme="green">
          Viaja con nosotros
        </Button>
      </Box>
    </Center>
  );
}

export default Header;
