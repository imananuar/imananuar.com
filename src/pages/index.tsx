import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Home from "./home";
import Footer from "@/layout/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  return (
    <>
      <Head>
        <title>Iman Anuar</title>
      </Head>
      <main className={``}>
        <div className="">
          <Home />
        </div>
      </main>
    </>
  );
}
