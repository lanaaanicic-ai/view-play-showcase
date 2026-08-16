import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { Contact, Footer } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lana Vujić — UX/UI Designer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Lana Vujić, a Berlin-based UX/UI designer creating digital experiences that are simple, useful and a little more human.",
      },
      { property: "og:title", content: "Lana Vujić — UX/UI Designer Portfolio" },
      {
        property: "og:description",
        content:
          "Selected product and web design work: Billy, Cookable, Feldenkrais Berlin and Utopia OS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
