import { Box, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import NextImage from "next/image";
import styles from "styles/projects.module.css";
import Link from "next/link";
export const ProjectCard = ({ project }) => {
  return (
    <Box
      role={"group"}
      p={6}
      maxW={"330px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
      mb={10}
    >
      <ImageBox project={project} />
      <Stack pt={10} align={"center"}>
        <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
          {project.techStack[0]}
        </Text>
        <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
          <Link href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </Heading>
        <div className={styles["project-desc"]}>{project.description}</div>
      </Stack>
    </Box>
  );
};

export const ImageBox = ({ project }) => {
  return (
    <Box
      rounded={"lg"}
      mt={-12}
      pos={"relative"}
      height={"230px"}
      _after={{
        transition: "all .3s ease",
        content: '""',
        w: "full",
        h: "full",
        pos: "absolute",
        top: 5,
        left: 0,
        backgroundColor: `${project.image.bgColor}`,
        filter: "blur(15px)",
        zIndex: -1,
      }}
      _groupHover={{
        _after: {
          filter: "blur(20px)",
        },
      }}
    >
      <Link href={`/projects/${project.slug}`}>
          <div className={styles["next-image-div"]}>
            <NextImage
              rounded={"lg"}
              alt={""}
              height={230}
              width={282}
              src={project.image.src}
            />
          </div>
      </Link>
    </Box>
  );
};
