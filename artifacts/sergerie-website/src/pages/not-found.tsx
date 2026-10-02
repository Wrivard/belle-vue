import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageWrapper } from "@/components/layout/page-wrapper";

export default function NotFound() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Page introuvable | Armoire Belle-Vue";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <PageWrapper>
      <main
        className="flex min-h-[75vh] items-center justify-center bg-[#1B1B1B] px-6 pb-20 pt-40 text-[#E4E4E4] md:pb-24 md:pt-44"
        data-testid="page-not-found"
      >
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-6 text-8xl font-extrabold leading-none tracking-tight text-[#D71920] md:text-9xl" aria-hidden="true">404</p>
          <h1 className="mb-5 text-3xl font-extrabold uppercase tracking-tight md:text-4xl" data-testid="text-404-title">
            Page introuvable
          </h1>
          <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-[#E4E4E4]/70 md:text-lg">
            La page que vous cherchez n’existe pas ou a été déplacée.
            Revenez à l’accueil pour découvrir nos services et nos réalisations.
          </p>
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#D71920] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#B51218] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B1B1B]"
            data-testid="link-retour-accueil"
          >
            Retour à l’accueil <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </main>
    </PageWrapper>
  );
}
