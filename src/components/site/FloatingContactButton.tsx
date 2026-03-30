import { MessageCircle } from 'lucide-react';
import { siteData } from '../../data/site';

export function FloatingContactButton() {
  if (!siteData.whatsappUrl) return null;

  return (
    <a
      href={siteData.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex size-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition hover:scale-105 hover:bg-emerald-600"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}