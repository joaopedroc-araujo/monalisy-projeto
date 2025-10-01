import ClinicGallery from "@/components/ClinicGallery";
import CTA from "@/components/home/CTA";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Treatments from "@/components/home/Treatments";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <ClinicGallery />
      <Treatments />
      <CTA />
    </div>
  );
}