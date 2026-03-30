import { ArrowRight, PawPrint } from 'lucide-react';
import { Container } from '../layout/Container';
import { siteData } from '../../data/site';

export function HeroSection() {
  return (
    <section id="inicio" className="section-anchor paw-pattern hero-mesh overflow-hidden py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="inline-flex rounded-full bg-pink-100 px-4 py-1.5 text-sm font-extrabold uppercase tracking-[0.22em] text-pink-600">
                {siteData.cityLabel}
              </span>

              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
                {siteData.slogan.split('pet').length > 1 ? (
                  <>
                    Nós cuidamos do seu <span className="text-pink-500">pet!</span>
                  </>
                ) : (
                  siteData.slogan
                )}
              </h1>

              <p className="max-w-xl text-lg leading-8 text-slate-600">{siteData.heroDescription}</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-8 py-4 text-base font-bold text-white transition hover:bg-slate-800"
              >
                Ver serviços
                <ArrowRight className="size-5" />
              </a>

              <a
                href={siteData.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-8 py-4 text-base font-bold text-slate-800 shadow-sm backdrop-blur transition hover:border-pink-200 hover:text-pink-600"
              >
                Falar com a loja
              </a>
            </div>

            <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center">
              <div className="flex -space-x-3">
                {['🐶', '🐱', '🐰'].map((emoji, index) => (
                  <span
                    key={emoji}
                    className={[
                      'flex size-12 items-center justify-center rounded-full border-2 border-white text-lg shadow-sm',
                      index === 0 ? 'bg-pink-100' : index === 1 ? 'bg-sky-100' : 'bg-amber-100',
                    ].join(' ')}
                  >
                    {emoji}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-500">
                <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm">+500 pets felizes</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
                  <PawPrint className="size-4 text-pink-500" />
                  Cuidado com carinho e segurança
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 right-0 h-64 w-64 rounded-full bg-pink-200/50 blur-3xl" />
            <div className="absolute -bottom-8 left-0 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/70 bg-white/80 p-3 shadow-[var(--shadow-soft)] backdrop-blur">
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/85 px-3 py-2 text-xs font-bold text-slate-700 shadow-sm backdrop-blur">
                <span className="size-2 rounded-full bg-emerald-500" />
                Atendimento humanizado
              </div>

              <img
                src={siteData.heroImageUrl}
                alt={siteData.heroImageAlt}
                className="h-[420px] w-full rounded-[1.6rem] object-cover md:h-[540px]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
