
import TreatmentPageLayout from "@/components/TreatmentPageLayout";
import { treatments } from "@/data/treatmentsData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return treatments.map((treatment) => ({
    slug: treatment.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const treatment = treatments.find((t) => t.slug === params.slug);

  if (!treatment) {
    return {
      title: "Tratamento Não Encontrado",
    };
  }

  return {
    title: `${treatment.name} | Clínica Monalisy Rodrigues`,
    description: treatment.shortDescription,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const treatmentData = treatments.find((t) => t.slug === slug);

  if (!treatmentData) {
    notFound();
  }

  return <TreatmentPageLayout treatment={treatmentData} />;
}
