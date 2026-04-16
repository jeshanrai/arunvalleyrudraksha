import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBand from "@/components/MarqueeBand";
import Origin from "@/components/Origin";
import Collection from "@/components/Collection";
import Zodiac from "@/components/Zodiac";
import Wholesale from "@/components/Wholesale";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MarqueeBand />
      <Origin />
      <Collection />
      <Zodiac />
      <Wholesale />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
