import { Github, Linkedin, Mail } from 'lucide-react';
import { DribbbleIcon } from '@/components/icons/dribbble-icon';
import { NavLink, Project, SkillCategory, SocialLink, Testimonial } from './types';

export const navLinks: NavLink[] = [
  { name: 'Vision', href: '#about' },
  { name: 'Collections', href: '/collections' },
  { name: 'Expertise', href: '#skills' },
  { name: 'Acclaim', href: '#testimonials' },
  { name: 'Blog', href: 'https://www.vogue.com/fashion', external: true },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sona-chavan/', icon: Linkedin },
  { name: 'GitHub', url: 'https://github.com/sona-chavan', icon: Github },
  { name: 'Dribbble', url: 'https://dribbble.com/sona-chavan', icon: DribbbleIcon },
  { name: 'Mail', url: 'mailto:sonachavan.dev@gmail.com', icon: Mail },
];

export const skillData: SkillCategory[] = [
  {
    title: 'Digital Atelier',
    skills: ['Brand Identity', 'UX/UI for Luxury', 'Digital Lookbooks', 'Interactive Campaigns', '3D Modeling', 'AR Experiences'],
  },
  {
    title: 'Tech Stack',
    skills: ['Next.js', 'WebGL', 'React', 'TypeScript', 'Headless CMS', 'Shopify Plus', 'Gen-AI'],
  },
];

export const projectsData: Project[] = [
  {
    title: 'Gucci "Flora" Campaign',
    description: 'An immersive digital experience for the "Flora" perfume launch, featuring interactive botanicals and AR try-on features.',
    tags: ['WebGL', 'AR', 'Interactive Storytelling'],
    imageUrl: "https://images.unsplash.com/photo-1557167668-6eb71e76b603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxHdWNjaXxlbnwwfHx8fDE3NTg2MTczMjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "perfume bottle flowers"
  },
  {
    title: 'Prada "Re-Nylon" Site',
    description: 'A storytelling-driven microsite highlighting Prada\'s sustainable Re-Nylon collection, built with Next.js for peak performance.',
    tags: ['Next.js', 'Headless CMS', 'Sustainable Fashion'],
    imageUrl: "https://images.unsplash.com/photo-1630696779947-7e349002cc38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxQcmFkYXxlbnwwfHx8fDE3NTg2MTc0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "clothing rack minimalist"
  },
  {
    title: 'Chanel "Métiers d\'Art" Lookbook',
    description: 'A digital lookbook showcasing the intricate details of the Chanel "Métiers d\'Art" collection through high-resolution imagery and video.',
    tags: ['Digital Lookbook', 'UI/UX', 'Luxury E-commerce'],
    imageUrl: "https://images.unsplash.com/photo-1592840054664-6bc0f6fbc3d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxDaGFuZWx8ZW58MHx8fHwxNzU4NjE3MzkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "fashion runway show"
  },
  {
    title: 'Coach Handbag',
    description: 'A 3D interactive model of a classic Coach handbag, allowing users to explore the craftsmanship in detail.',
    tags: ['3D Modeling', 'E-commerce', 'Product Showcase'],
    imageUrl: 'https://images.unsplash.com/photo-1586232910255-39a583b81d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNXx8Q29hY2glMjBoYW5kYmFnfGVufDB8fHx8MTc1ODYxODM5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'leather handbag'
  },
  {
    title: 'Balenciaga Campaign',
    description: 'A bold, animated campaign site for Balenciaga, capturing their rebellious spirit.',
    tags: ['Animation', 'Brand Campaign', 'Footwear'],
    imageUrl: 'https://images.unsplash.com/photo-1689711880342-0cb516d7be0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxN3x8YmFsZW5jaWFnYSUyMHNhbmRlbHN8ZW58MHx8fHwxNzU4NjE5NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'black boots'
  },
  {
    title: 'Versace "Medusa" Campaign',
    description: 'A bold, interactive campaign exploring the power and allure of the Medusa emblem, a cornerstone of the Versace brand.',
    tags: ['Interactive Campaign', 'Brand Storytelling', 'Animation'],
    imageUrl: 'https://images.unsplash.com/photo-1741816219305-827580cab505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8dmVyc2FjZSUyMHdvbWVuJTIwZHJlc3N8ZW58MHx8fHwxNzU4NjE5MDU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'medusa logo gold'
  },
  {
    title: 'Dior "J\'adore" Campaign',
    description: 'A golden, shimmering web experience for the iconic J\'adore fragrance.',
    tags: ['Animation', 'Luxury Branding', 'Fragrance'],
    imageUrl: 'https://diorama.dam-broadcast.com/cdn-cgi/image/width=1850,format=auto/pm_11872_1165_1165593-iniflxbeyq-whr.jpg',
    imageHint: 'perfume bottle gold'
  },
  {
    title: 'Louis Vuitton "Keepall" Bag',
    description: 'An interactive 3D configurator for the classic Keepall travel bag.',
    tags: ['3D Modeling', 'E-commerce', 'Luxury Goods'],
    imageUrl: 'https://images.unsplash.com/photo-1753718605172-86d37d27596d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8TG91aXMlMjB2dWl0dG9uJTIwZHVmZmVsJTIwYmFnfGVufDB8fHx8MTc1ODYxOTc0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'travel bag pattern'
  },
  {
    title: 'Michael Kors "Bradshaw" Watch',
    description: 'A sleek, elegant product page for the Bradshaw smartwatch collection.',
    tags: ['UI/UX', 'Product Page', 'Wearable Tech'],
    imageUrl: 'https://images.unsplash.com/photo-1734341739615-71be2b1cdb06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxNSyUyMHdvbWVuJTIwdGltZXdhdGNofGVufDB8fHx8MTc1ODYxOTg1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'gold watch'
  },
  {
    title: 'Aldo "Stessy" Heels',
    description: 'A fun AR try-on experience for Aldo\'s best-selling "Stessy" heels.',
    tags: ['AR', 'Footwear', 'E-commerce'],
    imageUrl: 'https://images.unsplash.com/photo-1459712105412-be146fae746d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxBbGRvJTIwaGlnaCUyMGhlZWxzfGVufDB8fHx8MTc1ODYxOTkxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'high heels'
  },
  {
    title: 'Mango "Flowy" Dress',
    description: 'A digital lookbook showcasing Mango\'s summer collection with video backgrounds.',
    tags: ['Digital Lookbook', 'Video Content', 'Fast Fashion'],
    imageUrl: 'https://picsum.photos/seed/mango-dress/600/400',
    imageHint: 'summer dress'
  },
  {
    title: 'Fendi "Baguette" Bag',
    description: 'A campaign microsite celebrating the 25th anniversary of the Fendi Baguette bag.',
    tags: ['Brand Storytelling', 'Microsite', 'Handbags'],
    imageUrl: 'https://picsum.photos/seed/fendi-bag/600/400',
    imageHint: 'designer handbag'
  },
  {
    title: 'Armani "Sì" Perfume',
    description: 'A cinematic landing page for the Armani Sì fragrance, featuring a short film.',
    tags: ['Video Content', 'Landing Page', 'Fragrance'],
    imageUrl: 'https://picsum.photos/seed/armani-perfume/600/400',
    imageHint: 'red perfume bottle'
  },
];

export const testimonialsData: Testimonial[] = [
  {
    quote: "7x7 Fashion brought our digital vision to life with unparalleled elegance and technical prowess. Their understanding of luxury is innate.",
    name: 'Alessandro Michele',
    title: 'Creative Director, Gucci',
  },
  {
    quote: "The team's execution was flawless. They created an experience that was not only beautiful but also deeply engaging for our audience.",
    name: 'Miuccia Prada',
    title: 'Head Designer, Prada',
  },
  {
    quote: "A seamless fusion of art and technology. They are the new standard for digital luxury experiences. Truly exceptional work.",
    name: 'Virginie Viard',
    title: 'Creative Director, Chanel',
  }
];
