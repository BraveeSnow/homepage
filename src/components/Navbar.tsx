import { Flex, HStack, Text } from "@chakra-ui/react"
import { Link } from "react-router"

function Navbar() {
  return (
    <>
      <Flex
        background={"black"}
        borderBottom={"1px solid lightgreen"}
        direction={"row"}
        paddingLeft={"1em"}
      >
        <HStack>
          <Text color={"lightgreen"}>Snow's World</Text>
          <Link className="navlink" to="/">
            Home
          </Link>
          <Link className="navlink" to="/projects">
            Projects
          </Link>
          <Link className="navlink" to="/contact">
            Contact Me
          </Link>
        </HStack>
      </Flex>
    </>
  )
}

export default Navbar
