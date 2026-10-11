import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "À propos" };

export default function AboutPage() {
  return (
    <div className="site-container grid gap-12 py-16 md:grid-cols-[.8fr_1fr] md:items-center md:py-24">
      <div className="landscape mx-auto w-full max-w-sm">
        <Image
          src="/dr-med-ali-beard.png"
          alt="Portrait de Mohamed Ali Ben Ammar"
          width={1000}
          height={1250}
          sizes="(min-width: 768px) 40vw, 100vw"
          className="aspect-square w-full object-cover object-[center_15%]"
        />
      </div>
      <div className="reading-width">
        <p className="eyebrow">Quelques mots</p>
        <h1 className="page-title">À propos</h1>
        <div className="prose-text">
          <p>
            Entre mémoire et horizon, la poésie ouvre un espace où les mots
            recueillent les absences, les souvenirs et les espoirs.
          </p>
          <p>
            À travers ses textes, Mohamed Ali Ben Ammar explore les liens qui
            nous unissent aux lieux, aux êtres et à ce que nous emportons avec
            nous.
          </p>
        </div>
      </div>
    </div>
  );
}
