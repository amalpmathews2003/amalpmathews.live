import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`;

export default function Logo() {
  const logoImage = `/images/footprint${useColorModeValue("", "-dark")}.png`;
  return (
    <Link href="/">
        <LogoBox>
          <Image src={logoImage} width={20} height={20} alt="logo"></Image>
          <Text
            color={useColorModeValue("grey.800", "whiteAlpha.900")}
            fontFamily={"M PLUS Rouded 1c"}
            fontWeight={"bold"}
            ml={3}
          >
            Amal P Mathews
          </Text>
        </LogoBox>
    </Link>
  );
}
