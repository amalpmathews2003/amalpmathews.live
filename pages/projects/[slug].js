import {
  Box,
  Code,
  Container,
  Heading,
  Link,
  Stack,
  Text,
  Center,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link"
import styles from "styles/projects.module.css";
import { FiGithub } from "react-icons/fi";
import { BiLink } from "react-icons/bi";
import { ProjectPageData } from "@/components/data";
import Layout from "@/components/article";
const alignCenter = {
  style: {
    alignSelf: "center",
  },
};
const ProjectPage = ({ project }) => {
  return (
    <Layout title={project.title}>

      <Center>
        <Stack direction={["column", null, null, "row"]}>
          <Heading>{project.title}</Heading>
          <Code alignSelf={"end"}>{project.category}</Code>
        </Stack>
      </Center>
      <Stack direction={["column", null, null, "row"]} justify={"space-around"}>
        <Stack direction={["column", null, null, "row"]} justify={"center"}>
          <FiGithub {...alignCenter} />
          <NextLink
            {...alignCenter}
            href={project.githubLink || ""}
            target={"_blank"}
            rel="noreferrer"
          >
            {project.githubLink}
          </NextLink>
        </Stack>
        {project.url && (
          <Stack direction={["column", null, null, "row"]} justify={"center"}>
            <BiLink {...alignCenter} />

            <NextLink
              {...alignCenter}
              href={project.url || ""}
              target={"_blank"}
              rel="noreferrer"
            >
              {project.url}
            </NextLink>
          </Stack>
        )}
      </Stack>
      <Box h={10}></Box>
      <Text>{project.description}</Text>
      <Box h={10}></Box>
        <NextImage
          src={project.image.src}
          alt={""}
          width={900}
          height={200}
          className={styles["project-img-div"]}
        />
      <Box h={10}></Box>
      <Stack direction={["column", null, null, "row"]} justify={"center"}>
        {project.techStack.map((tech, idx) => (
          <div key={idx} className={styles["textstack"]}>
            {tech}
          </div>
        ))}
      </Stack>
      {project?.pre}
    </Layout>
  );
};

export default ProjectPage;

export const getStaticPaths = () => {
  return {
    paths: ProjectPageData.projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const { params } = context;
  const project = ProjectPageData.projects.find(
    (project) => project.slug === params.slug
  );
  return {
    props: {
      project,
    },
  };
};
