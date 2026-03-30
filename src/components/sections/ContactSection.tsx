import { ArrowUpRight, MapPinned } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';
import { siteData } from '../../data/site';
import { isStoreOpenNow } from "../utils/isStoreOpenNow";
export function ContactSection() {
  const openNow = isStoreOpenNow();
  return (
    <section id="contato" className="section-anchor overflow-hidden bg-slate-950 py-20 text-white md:py-24">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader
              eyebrow="Contato"
              title="Onde estamos"
              description="Venha nos visitar, agende um horário e deixe seu pet nas mãos de quem cuida com atenção de verdade."
              align="left"
              theme="dark"
            />

            <div className="mt-10 space-y-5">
              {siteData.contactBlocks.map((item) => {
                const Icon = item.icon;
                const content = item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 transition hover:text-pink-300"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-slate-300">{item.value}</p>
                );

                return (
                  <article key={item.title} className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/8 text-pink-400">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <div className="mt-1 text-sm leading-6">{content}</div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div
                className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold text-white ${openNow ? "bg-white/8" : "bg-red-500/15"
                  }`}
              >
                <span
                  className={`size-2 rounded-full ${openNow ? "bg-emerald-400" : "bg-red-400"
                    }`}
                />
                {openNow ? siteData.openNowLabel : "Fechado agora"}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Segunda a sexta</p>
                  <p className="mt-2 text-base font-semibold text-white">08:00 - 17:00</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Sábados</p>
                  <p className="mt-2 text-base font-semibold text-white">08:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-sky-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
              <div className="border-b border-white/10 p-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 text-sm font-semibold text-slate-100">
                  <MapPinned className="size-4 text-pink-400" />
                  Localização da loja
                </div>
              </div>

              <div className="flex min-h-[420px] flex-col items-center justify-center p-8 text-center">
                <div className="flex size-20 items-center justify-center rounded-full bg-white/8 text-pink-400">
                  <MapPinned className="size-9" />
                </div>
                <h3 className="mt-6 text-2xl font-black tracking-tight text-white">Abrir no Google Maps</h3>
                <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
                  Para manter a página mais leve e performática, o projeto usa um CTA para o mapa em vez de embutir iframe pesado logo na primeira carga.
                </p>
                <a
                  href={siteData.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-pink-100"
                >
                  Abrir no Google Maps
                  <ArrowUpRight className="size-4" />
                </a>
                <p className="mt-6 max-w-lg text-sm leading-6 text-slate-400">{siteData.address}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
