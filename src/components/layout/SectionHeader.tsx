type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'light',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleClassName = theme === 'dark' ? 'text-white' : 'text-slate-950';
  const descriptionClassName = theme === 'dark' ? 'text-slate-300' : 'text-slate-600';
  const eyebrowClassName =
    theme === 'dark'
      ? 'bg-white/10 text-pink-300'
      : 'bg-pink-100 text-pink-600';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <span
          className={`mb-4 inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] ${eyebrowClassName}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`text-3xl font-black tracking-tight md:text-4xl ${titleClassName}`}>{title}</h2>
      <p className={`mt-4 text-base leading-7 md:text-lg ${descriptionClassName}`}>{description}</p>
    </div>
  );
}
