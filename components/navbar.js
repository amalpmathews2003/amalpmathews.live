import Logo from "./logo"
import NextLink from "next/link"
import { Box, Container, Flex, Heading, Link, useColorModeValue } from "@chakra-ui/react"
function LinkItem({ href, path, children }) {
  const active = path === href
  const inactiveColor = useColorModeValue('grey200', 'whiteAlpha.900')

  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}
export default function Navbar(props) {

  const { path } = props
  return (
    <Box
      position={"fixed"}
      as={"nav"}
      w={"100%"}
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display={"flex"}
        p={2}
        maxW={"container.md"}
        wrap="wrap"
        align="center"
        justfy="space-between"
      >
        <Flex align={"center"} mr={5}>
          <Heading as="h1" size={"lg"} letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
      </Container>
    </Box>
  )
}