import {
  Stack,
  Heading,
  Flex,
  Tag,
  TagLabel,
  TagLeftIcon,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiJavascript,
  SiJava,
  SiGo,
  SiAngular,
  SiReact,
  SiNodeDotJs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiLinux,
  SiAmazonaws,
  SiGooglecloud,
  SiMicrosoftazure,
  SiDocker,
  SiPython,
  SiC,
  SiDigitalocean,
  SiNextdotjs,
  SiStrapi,
  SiDjango,
  SiNestjs,
  SiGraphql,
  SiNodedotjs,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiRust,
  SiPandas,
  SiNumpy,
  SiMaterialui,
  SiOpencv,
  SiGithub,
  SiGithubactions,
  SiGitpod,
  SiWindows,
  SiNpm,
  SiYarn,
  SiChakraui,
  SiBootstrap,
  SiVite,
  SiTailwindcss,
  SiHeroku,
  SiNginx,
  SiPm2,
  SiPowershell,
  SiGnubash,
  SiGoogleanalytics,
  SiSocketdotio,
  SiSolidity,
  SiEthereum,
  SiExpress,
  SiSqlite,
  SiFilezilla,
  SiFirefoxbrowser,
  SiFramer,
  SiNetlify,
  SiNgrok,
  SiNodemon,
  SiReactrouter,
  SiSelenium,
  SiStorybook,
  SiSublimetext,
  SiUbuntu,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";

const temp = [
  [
    ["NextJs", SiNextdotjs],
    ["React", SiReact],
    ["JavaScript", SiJavascript],
    ["Typescript", SiTypescript],
    ["HTML5", SiHtml5],
    ["CSS3", SiCss3],
    ["Firebase", SiFirebase],
    ["Chakraui", SiChakraui],
    ["MaterialUI", SiMaterialui],
    ["Bootstrap", SiBootstrap],
    ["Tailwind", SiTailwindcss],
    ["Vite", SiVite],
    ["SocketIO", SiSocketdotio],
    ["Framermotion", SiFramer],
  ],
  [
    ["NodeJs", SiNodedotjs],
    ["Strapi", SiStrapi],
    ["Django", SiDjango],
    ["NestJs", SiNestjs],
    ["GraphQl", SiGraphql],
    ["ExpressJs", SiExpress],
    ["Postgres", SiPostgresql],
    ["MySQL", SiMysql],
    ["SQLite", SiSqlite],
    ["Nodemon", SiNodemon],
  ],
  [
    ["Linux", SiLinux],
    ["Ubuntu", SiUbuntu],
    ["Digitalocean", SiDigitalocean],
    ["Nginx", SiNginx],
    ["PM2", SiPm2],
    ["Powershell", SiPowershell],
    ["Shell", SiGnubash],
    ["FileZilla", SiFilezilla],
    ["Netlify", SiNetlify],
    ["Vercel", SiVercel],
    ["Heroku", SiHeroku],
  ],
  [
    ["Python", SiPython],
    ["OpenCV", SiOpencv],
    ["Pandas", SiPandas],
    ["C++", SiCplusplus],
    ["C", SiC],
  ],
  [
    ["Npm", SiNpm],
    ["Yarn", SiYarn],
    ["Vite", SiVite],
    ["Ngork", SiNgrok],
    ["Firefox", SiFirefoxbrowser],
    ["VSCode",SiVisualstudiocode],
    ["SublimeText", SiSublimetext],
  ],
  [
    ["Git", SiGit],
    ["Github", SiGithub],
    ["Gitpod", SiGitpod],
    ["Github Actions", SiGithubactions],
  ],
];

const skills = [
  ["NextJs", SiNextdotjs],
  ["React", SiReact],
  ["JavaScript", SiJavascript],
  ["Typescript", SiTypescript],
  ["NodeJs", SiNodedotjs],
  ["HTML5", SiHtml5],
  ["CSS3", SiCss3],
  ["Python", SiPython],
  ["C++", SiCplusplus],
  ["C", SiC],
  ["Strapi", SiStrapi],
  ["Django", SiDjango],
  ["NestJs", SiNestjs],
  ["GraphQl", SiGraphql],
  ["Flutter", SiFlutter],
  ["Dart", SiDart],
  ["Firebase", SiFirebase],
  ["Rust", SiRust],
  ["Pandas", SiPandas],
  ["Git", SiGit],
  ["GitHub", SiGithub],
  ["GitPod", SiGitpod],
  ["Githubactions", SiGithubactions],
  ["DigitalOccean", SiDigitalocean],
  ["Linux", SiLinux],
  ["Windows", SiWindows],
  ["Npm", SiNpm],
  ["Yarn", SiYarn],
  ["Chakraui", SiChakraui],
  ["Bootstrap", SiBootstrap],
  ["Tailwind", SiTailwindcss],
  ["Vite", SiVite],
  ["Heroku", SiHeroku],
];
const skills2 = [
  ["NextJs", SiNextdotjs],
  ["React", SiReact],
  ["Typescript", SiTypescript],
  ["HTML5", SiHtml5],
  ["CSS3", SiCss3],
  ["Python", SiPython],
  ["C++", SiCplusplus],
  ["Strapi", SiStrapi],
  ["Django", SiDjango],
  ["GraphQl", SiGraphql],
  ["Flutter", SiFlutter],
  ["Firebase", SiFirebase],
  ["Rust", SiRust],
  ["Git", SiGit],
  ["GitHub", SiGithub],
  ["DigitalOccean", SiDigitalocean],
  ["Linux", SiLinux],
  ["Tailwind", SiTailwindcss],
];
const colors = [
  "gray",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
  "purple",
  "pink",
  "linkedin",
  "facebook",
  "messenger",
  "whatsapp",
  "twitter",
  "telegram",
];

export const Skills = ({ all = true }) => {
  return (
    <Stack spacing={7} mt={[10, 20]}>
      <Heading>⚒️ &amp; Skills</Heading>
      <Flex wrap={"wrap"}>
        {all
          ? temp.map((t, index) => (
              <div key={index}>
                {t.map((skill, i) => (
                  <Tag
                    key={i}
                    size={"lg"}
                    variant="subtle"
                    colorScheme={colors[i % colors.length]}
                    m={1}
                  >
                    <TagLeftIcon boxSize="22px" as={skill[1]}></TagLeftIcon>
                    <TagLabel>{skill[0]}</TagLabel>
                  </Tag>
                ))}
              </div>
            ))
          : skills2.map((skill, index) => (
              <Tag
                key={index}
                size={"lg"}
                variant="subtle"
                colorScheme={colors[index % colors.length]}
                m={1}
              >
                <TagLeftIcon boxSize="22px" as={skill[1]}></TagLeftIcon>
                <TagLabel>{skill[0]}</TagLabel>
              </Tag>
            ))}

        {all ? null : (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            {/* <Link href="/skills">
              <a>
                <Tag size={"lg"} variant="subtle" m={1}>
                  <TagLabel>{"More"}</TagLabel>
                </Tag>
              </a>
            </Link> */}
          </div>
        )}
      </Flex>
    </Stack>
  );
};
