import { Instagram, MessageCircle } from 'lucide-react';
import { siteData } from '../../data/site';

export function FloatingContactButton() {
  const href = siteData.whatsappUrl ?? siteData.instagramUrl;
  const label = siteData.whatsappUrl ? 'Falar no WhatsApp' : 'Abrir Instagram da loja';
  const Icon = siteData.whatsappUrl ? MessageCircle : Instagram;
  const colorClass = siteData.whatsappUrl ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-pink-500 hover:bg-pink-600';

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`fixed bottom-6 right-6 z-40 inline-flex size-14 items-center justify-center rounded-full text-white shadow-2xl transition hover:scale-105 ${colorClass}`}
    >
      <Icon className="size-6" />
    </a>
  );
}
