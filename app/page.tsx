import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";

const Features = dynamic(() => import("@/components/home/Features"));
const ClinicGallery = dynamic(() => import("@/components/ClinicGallery"));
const Treatments = dynamic(() => import("@/components/home/Treatments"));
const CTA = dynamic(() => import("@/components/home/CTA"));

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
