import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#1B1B1B] text-[#E4E4E4]">
      <div className="text-center px-6">
        <div className="text-8xl font-bold text-[#FF6501] mb-4">404</div>
        <h1 className="text-3xl font-bold uppercase tracking-tight mb-4" data-testid="text-404-title">Page introuvable</h1>
        <p className="text-[#E4E4E4]/60 mb-8 max-w-md mx-auto">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link href="/">
          <Button className="bg-[#FF6501] hover:bg-[#FF6501]/90 text-white font-bold rounded-md px-8 py-6 uppercase tracking-wide h-auto" data-testid="link-retour-accueil">
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
}
