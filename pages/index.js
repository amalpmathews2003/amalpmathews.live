import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "@/components/article";
import { FiGithub } from "react-icons/fi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { IndexPageData } from "@/components/data";
export default function Home() {
  return (
    <Layout title={"Home Page"}>
      <>
        <Box
          borderRadius={"lg"}
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={3}
          align={"center"}
        >
          Hello Guys
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as={"h2"} variant="page-title">
              {IndexPageData.name}
            </Heading>
            <p>{IndexPageData.title}</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src={IndexPageData.profilePic.src}
              alt="profile image"
            />
          </Box>
        </Box>
        <Stack direction={["column", null, null, "row"]}>
          <Box flex={"1"}>
            <Section delay={0.1}>
              <Heading as="h3" variant={"section-title"}>
                About Me
              </Heading>
              <Paragraph>
                {IndexPageData.description}
                {/* <NextLink href={IndexPageData.currentProject.url}>
                  <a>
                    <Link color={"red"}>
                      {IndexPageData.currentProject.name}
                    </Link>
                  </a>
                </NextLink> */}
              </Paragraph>
              <Box align="center" my={4}>
                <a
                  href={IndexPageData.resumeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button rightIcon={<ChevronRightIcon />} colorScheme={"teal"}>
                    My Resume
                  </Button>
                </a>
              </Box>
            </Section>
          </Box>
          <Box
            flex={"1"}
            display={"flex"}
            justifyContent={["center", null, null, "flex-end"]}
          >
            <Section delay={0.3}>
              <Heading as="h3" variant={"section-title"}>
                Bio
              </Heading>
              {IndexPageData.bio.map((item, idx) => (
                <BioSection key={idx}>
                  <BioYear>{item.year}</BioYear>
                  {item.title}
                </BioSection>
              ))}
            </Section>
          </Box>
        </Stack>
        <Stack direction={["column", null, null, "row"]}>
          <Box flex={"1"}>
            <Section delay={0.4}>
              <Heading as="h3" variant="section-title">
                I ♥
              </Heading>
              <Paragraph>{IndexPageData.iLove}</Paragraph>
            </Section>
          </Box>
          <Box
            flex={"1"}
            display={"flex"}
            justifyContent={["center", null, null, "flex-end"]}
          >
            <Section delay={0.5}>
              <Heading as="h3" variant={"section-title"}>
                On the web
              </Heading>
              <List>
                <ListItem>
                  <a
                    href={"https://github.com/amalpmathews2003"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Link>
                      <Button
                        variant={"ghost"}
                        colorScheme={"teal"}
                        leftIcon={<Icon as={FiGithub}></Icon>}
                      ></Button>
                    </Link>
                  </a>
                  <a
                    href={"https://www.instagram.com/amal_p_mathews_2003/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Link>
                      <Button
                        variant={"ghost"}
                        colorScheme={"teal"}
                        leftIcon={<Icon as={BsInstagram}></Icon>}
                      ></Button>
                    </Link>
                  </a>
                  <a
                    href={"https://www.facebook.com/amalpullukottayil.mathew"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Link>
                      <Button
                        variant={"ghost"}
                        colorScheme={"teal"}
                        leftIcon={<Icon as={BsFacebook}></Icon>}
                      ></Button>
                    </Link>
                  </a>
                  <a
                    href={"https://github.com/amalpmathews2003"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Link>
                      <Button
                        variant={"ghost"}
                        colorScheme={"teal"}
                        leftIcon={<Icon as={AiOutlineTwitter}></Icon>}
                      ></Button>
                    </Link>
                  </a>
                  <a
                    href={"https://www.linkedin.com/in/amal-p-mathews/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Link>
                      <Button
                        variant={"ghost"}
                        colorScheme={"teal"}
                        leftIcon={<Icon as={AiFillLinkedin}></Icon>}
                      ></Button>
                    </Link>
                  </a>
                </ListItem>
              </List>
            </Section>
          </Box>
        </Stack>
      </>
    </Layout>
  );
}
