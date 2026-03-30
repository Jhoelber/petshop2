
import { Container } from '../layout/Container';
import { siteData } from '../../data/site';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container className="text-center">
        <div className="mb-5 flex items-center justify-center gap-3">
           <img
            src="/pazLogo.webp"
            alt="Logo Paz Pet Shop"
            className="rounded-full object-cover sm:size-10"
          />
          <span className="text-lg font-black tracking-tight text-slate-950">{siteData.name.toUpperCase()}</span>
        </div>

        <p className="text-sm text-slate-500">© 2026 {siteData.name} — Todos os direitos reservados.</p>
        <p className="mt-2 text-xs text-slate-400">{siteData.cityLabel}</p>
      </Container>
    </footer>
  );
}
