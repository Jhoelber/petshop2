import { Container } from '../layout/Container';
import { siteData } from '../../data/site';

export function QuickInfoSection() {
  return (
    <section className="relative -mt-8 pb-8 md:-mt-12 md:pb-12">
      <Container>
        <div className="grid gap-5 md:grid-cols-3">
          {siteData.quickInfo.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-white/70 bg-white p-6 shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-center gap-4">
                  <div className={`flex size-14 items-center justify-center rounded-2xl ${item.iconWrapperClassName}`}>
                    <Icon className={`size-6 ${item.iconClassName}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold tracking-tight text-slate-950">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.lines[0]}</p>
                    <p className="text-sm text-slate-500">{item.lines[1]}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
