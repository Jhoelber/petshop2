import {
  Bath,
  Bone,
  CarFront,
  Clock3,
  Droplets,
  Home,
  MapPin,
  Package,
  Pill,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Instagram,
  Phone,
} from 'lucide-react';
import type { SiteData } from '../types/site';

const address = 'R. Jorn. Roberto Jaques Brunini - Cuiabá, MT, 78065-485, Brasil';

export const siteData: SiteData = {
  name: 'Paz Pet Shop',
  slogan: 'Nós cuidamos do seu pet!',
  instagram: '@pazpetshop',
  instagramUrl: 'https://www.instagram.com/pazpetshop/',
  // Preencha quando tiver o número oficial:
  // whatsappUrl: 'https://wa.me/5565SEUNUMERO',
  cityLabel: 'Cuiabá - MT',
  address,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  heroImageUrl:
    'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200',
  heroImageAlt: 'Cachorro feliz sendo cuidado no pet shop',
  heroDescription:
    'Oferecemos o melhor em estética, saúde e lazer para o seu melhor amigo, com carinho, segurança e profissionalismo.',
  openNowLabel: 'Aberto agora',
  hours: {
    weekdays: 'Segunda a sexta das 8h às 17h',
    saturday: 'Sábado das 8h às 12h',
  },
  highlights: [
    { title: 'Banho e tosa', icon: Bath },
    { title: 'Vacinas e meds', icon: ShieldCheck },
    { title: 'Consultas', icon: Stethoscope },
  ],
  quickInfo: [
    {
      title: 'Funcionamento',
      lines: ['Seg-Sex: 08h às 17h', 'Sábado: 08h às 12h'],
      icon: Clock3,
      iconWrapperClassName: 'bg-pink-100',
      iconClassName: 'text-pink-600',
    },
    {
      title: 'Localização',
      lines: ['R. Jorn. Roberto J. Brunini', 'Cuiabá, MT'],
      icon: MapPin,
      iconWrapperClassName: 'bg-sky-100',
      iconClassName: 'text-sky-600',
    },
    {
      title: 'Atendimento',
      lines: ['Também atendemos', 'a domicílio'],
      icon: Home,
      iconWrapperClassName: 'bg-emerald-100',
      iconClassName: 'text-emerald-600',
    },
  ],
  services: [
    {
      title: 'Rações e petiscos',
      icon: Bone,
      iconWrapperClassName: 'bg-orange-50',
      iconClassName: 'text-orange-500',
    },
    {
      title: 'Estética e banho',
      icon: Bath,
      iconWrapperClassName: 'bg-pink-50',
      iconClassName: 'text-pink-500',
    },
    {
      title: 'Vacinas e meds',
      icon: Pill,
      iconWrapperClassName: 'bg-sky-50',
      iconClassName: 'text-sky-500',
    },
    {
      title: 'Cromoterapia',
      icon: Sparkles,
      iconWrapperClassName: 'bg-violet-50',
      iconClassName: 'text-violet-500',
    },
    {
      title: 'Táxi dog',
      icon: CarFront,
      iconWrapperClassName: 'bg-amber-50',
      iconClassName: 'text-amber-500',
    },
    {
      title: 'Consultas',
      icon: Stethoscope,
      iconWrapperClassName: 'bg-emerald-50',
      iconClassName: 'text-emerald-500',
    },
    {
      title: 'Brinquedos',
      icon: Package,
      iconWrapperClassName: 'bg-rose-50',
      iconClassName: 'text-rose-500',
    },
    {
      title: 'Aromaterapia',
      icon: Droplets,
      iconWrapperClassName: 'bg-indigo-50',
      iconClassName: 'text-indigo-500',
    },
  ],
  extraServices: ['Tosa', 'Hidratação', 'Acessórios', 'Atendimento domiciliar'],
  contactBlocks: [
    {
      title: 'Endereço',
      value: address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
      icon: MapPin,
    },
    {
      title: 'Rede social',
      value: '@pazpetshop',
      href: 'https://www.instagram.com/pazpetshop/',
      icon: Instagram,
    },
    {
      title: 'Atendimento',
      value: 'Agendamentos, dúvidas e informações rápidas',
      icon: Phone,
    },
  ],
};
