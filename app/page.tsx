import Hero from "@components/home/Hero";
import NavBar from "@components/global/NavBar";
import Solution from "@/src/components/home/Solution";
import AboutUs from "@/src/components/home/AboutUs";
import ClientFeedback from "@/src/components/home/ClientFeedback";
import Footer from "@/src/components/home/Footer";
import ContactUs from "@/src/components/home/ContactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Fumiwo - Home',
  description: "Fumiwo Home Page",
}

export default function Home() {
  return (
    <>
      <NavBar dark />
      <main>
        <Hero />
        <Solution />
        <AboutUs />
        <ClientFeedback />
      </main>
    </>
  );
}
