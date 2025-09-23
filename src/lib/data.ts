import { Github, Linkedin, Mail } from 'lucide-react';
import { DribbbleIcon } from '@/components/icons/dribbble-icon';
import { NavLink, Project, SkillCategory, SocialLink, Testimonial } from './types';

export const navLinks: NavLink[] = [
  { name: 'Vision', href: '#about' },
  { name: 'Collections', href: '#projects' },
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
    title: 'Gucci Marmont Handbag',
    description: 'A 3D interactive model of the iconic Gucci Marmont handbag, allowing users to explore the craftsmanship in detail.',
    tags: ['3D Modeling', 'E-commerce', 'Product Showcase'],
    imageUrl: 'https://picsum.photos/seed/gucci-bag/600/400',
    imageHint: 'leather handbag'
  },
  {
    title: 'Prada Monolith Boots',
    description: 'A bold, animated campaign site for the chunky Prada Monolith boots, capturing their rebellious spirit.',
    tags: ['Animation', 'Brand Campaign', 'Footwear'],
    imageUrl: 'https://picsum.photos/seed/prada-boots/600/400',
    imageHint: 'black boots'
  },
  {
    title: 'Chanel No. 5 Experience',
    description: 'A virtual journey through the history and creation of the legendary Chanel No. 5 perfume.',
    tags: ['Virtual Reality', 'Brand Storytelling', 'Fragrance'],
    imageUrl: 'https://picsum.photos/seed/chanel-perfume/600/400',
    imageHint: 'perfume bottle elegant'
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
