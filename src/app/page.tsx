import Image from "next/image";
import Navbar from '@/components/Navbar';
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import CustomPrint from "@/components/CustomPrint";
import Designs from "@/components/Designs";
import DisplayPatterns from "@/components/DisplayPatterns";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Categories />
      <Hero />
      <div className="hidden md:flex">
        <Features />
      </div>
      <CustomPrint />
      <Designs />
      <DisplayPatterns />
      <Footer />
    </div>
  );
}
