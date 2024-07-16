import Banner from "@/components/Banner";
import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Navbar from "@/components/Navbar";
import ProductShowcase from "@/components/ProductShowcase";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQ />
      <CallToAction />
      <Footer />
    </>
  );
}
