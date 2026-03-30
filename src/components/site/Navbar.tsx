
import { Container } from '../layout/Container';
import { siteData } from '../../data/site';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#contato', label: 'Contato' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3 text-slate-950" aria-label="Ir para o início">
          <img
            src="/pazLogo.webp"
            alt="Logo Paz Pet Shop"
            width={40}
            height={40}
            className=" rounded-full object-cover"
          />
          <span className="text-lg font-black tracking-tight sm:text-xl">
            {siteData.name.toUpperCase()}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-pink-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={siteData.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex max-w-full items-center justify-center whitespace-nowrap rounded-full bg-pink-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-pink-200 transition hover:bg-pink-600 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Siga {siteData.instagram}
        </a>
      </Container>
    </header>
  );
}
