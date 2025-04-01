import { Box, Heading, HStack, VStack } from "@chakra-ui/react"

function BrowserAnimation() {
  // TODO: fix this later
  return (
    <>
      <Box
        position={"relative"}
        bgGradient={"to-br"}
        gradientFrom={"accent"}
        gradientTo={"surface1"}
        height={64}
        aspectRatio={16 / 9}
        borderRadius={8}
        _after={{
          content: '""',
          position: "absolute",
          bg: "surface0",
          inset: 1,
          borderRadius: 6,
        }}
      />
    </>
  )
}

function App() {
  return (
    <>
      <Box pt={32} />
      <HStack alignItems={"end"} justifyContent={"space-evenly"}>
        <VStack alignItems={"end"}>
          <Heading
            as={"h1"}
            color={"accent"}
            fontSize={"8xl"}
            fontWeight={"bold"}
            lineHeight={1}
          >
            Icepick
          </Heading>
          <Heading as={"h2"} fontSize={"4xl"}>
            Development
          </Heading>
        </VStack>
        <BrowserAnimation />
      </HStack>
    </>
  )
}

export default App
