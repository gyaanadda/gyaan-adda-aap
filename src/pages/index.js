import { Geist, Geist_Mono } from "next/font/google";
import LandingPage from "@/components/LandinPage";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Gyaan Adda</title>
        <meta name="title" content="Gyaan Adda" />
        <meta
          name="description"
          content="Gyan Adda is a collaborative space for learners, mentors, and creators to exchange ideas, insights, and knowledge across a wide range of topics — from tech and career to wellness and more."
        />
        <meta />
        <link rel="canonical" href="https://www.gyaanaddaapp.com/" />
      </Head>

      <section className="scroll-smooth">
        <LandingPage />
      </section>
    </>
  );
}
