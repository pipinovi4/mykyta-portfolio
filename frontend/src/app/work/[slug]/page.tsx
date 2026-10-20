import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/content/portfolio";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();
  return {
    title: project.title,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: project.title,
      url: `/work/${slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mykyta Bozhenko — engineering portfolio" }],
    },
  };
}

export default function ProjectPage() {
  return (
    <>
      <SiteHeader linkToHome />
      <main />
    </>
  );
}
