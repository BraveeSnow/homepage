import { Flex, HStack, Text } from "@chakra-ui/react"
import { Link } from "react-router"

function Navbar() {
  return (
    <>
      <Flex background={"surface0"} direction={"row"} paddingLeft={4}>
        <HStack>
          <Text color={"accent"} fontSize={"lg"}>
            Icepick
          </Text>
          <Link className="navlink" to="/">
            <Text
              p={[4, 3]}
              fontSize={"lg"}
              _hover={{ bg: "accent", color: "background" }}
            >
              Home
            </Text>
          </Link>
          <Link className="navlink" to="/projects">
            <Text
              p={[4, 3]}
              fontSize={"lg"}
              _hover={{ bg: "accent", color: "background" }}
            >
              Portfolio
            </Text>
          </Link>
          <Link className="navlink" to="/contact">
            <Text
              p={[4, 3]}
              fontSize={"lg"}
              _hover={{ bg: "accent", color: "background" }}
            >
              Contact Me
            </Text>
          </Link>
        </HStack>
      </Flex>
    </>
  )
}

export default Navbar
