import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google"
import Image from "next/image";
import logoImg from "../assets/Logo.svg";

import { Container, Header } from "@/styles/pages/app";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Header>
        <Image src={logoImg} alt="logo"/>
      </Header>
      <Component {...pageProps}/>
    </Container>
  )
}

