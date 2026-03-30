import type { LucideIcon } from 'lucide-react';

export type Highlight = {
  title: string;
  icon: LucideIcon;
};

export type QuickInfoItem = {
  title: string;
  lines: [string, string];
  icon: LucideIcon;
  iconWrapperClassName: string;
  iconClassName: string;
};

export type ServiceItem = {
  title: string;
  icon: LucideIcon;
  iconWrapperClassName: string;
  iconClassName: string;
};

export type ContactBlock = {
  title: string;
  value: string;
  href?: string;
  icon: LucideIcon;
};

export type SiteData = {
  name: string;
  slogan: string;
  instagram: string;
  instagramUrl: string;
  whatsappUrl?: string;
  cityLabel: string;
  address: string;
  mapsUrl: string;
  heroImageUrl: string;
  heroImageAlt: string;
  heroDescription: string;
  openNowLabel: string;
  hours: {
    weekdays: string;
    saturday: string;
  };
  highlights: Highlight[];
  quickInfo: QuickInfoItem[];
  services: ServiceItem[];
  extraServices: string[];
  contactBlocks: ContactBlock[];
};
