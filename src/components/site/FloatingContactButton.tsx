import { siteData } from "../../data/site";

export function FloatingContactButton() {
  if (!siteData.whatsappUrl) return null;

  return (
    <a
      href={siteData.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex size-14 items-center justify-center rounded-full bg-white shadow-2xl ring-1 ring-black/10 transition hover:scale-105"
    >
      <img
        src="https://res.cloudinary.com/dfgbasaxa/image/upload/v1774909604/pazpet/whats_tez8jq.webp"
        alt=""
        aria-hidden="true"
        className="size-10 object-contain"
      />
    </a>
  );
}