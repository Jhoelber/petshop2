import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';
import { siteData } from '../../data/site';

export function ServicesSection() {
  return (
    <section id="servicos" className="section-anchor py-20 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Serviços"
          title="O que oferecemos"
          description="Tudo que o seu pet precisa em um só lugar, com especialistas que amam o que fazem e uma experiência de atendimento mais clara e agradável."
        />

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {siteData.services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-soft)]"
              >
                <div
                  className={`mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-105 ${service.iconWrapperClassName}`}
                >
                  <Icon className={`size-7 ${service.iconClassName}`} />
                </div>
                <h3 className="text-base font-extrabold tracking-tight text-slate-900 md:text-lg">{service.title}</h3>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-4xl  p-8 md:p-10">
          <h3 className="text-center text-xl font-black tracking-tight text-slate-950">Tambem Temos</h3>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {siteData.extraServices.map((item) => (
              <span
                key={item}
                className="rounded-full border border-pink-100 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm"
              >
                • {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
