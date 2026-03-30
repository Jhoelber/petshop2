import { PawPrint } from 'lucide-react';
import { Container } from '../layout/Container';
import { siteData } from '../../data/site';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container className="text-center">
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-pink-500 text-white shadow-lg shadow-pink-200/80">
            <PawPrint className="size-5" />
          </span>
          <span className="text-lg font-black tracking-tight text-slate-950">{siteData.name.toUpperCase()}</span>
        </div>

        <p className="text-sm text-slate-500">© 2026 {siteData.name} — Todos os direitos reservados.</p>
        <p className="mt-2 text-xs text-slate-400">{siteData.cityLabel}</p>
      </Container>
    </footer>
  );
}
