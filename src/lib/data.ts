import { GitHub, Linkedin, Mail } from 'lucide-react';
import { DribbbleIcon } from '@/components/icons/dribbble-icon';
import { BehanceIcon } from '@/components/icons/behance-icon';
import { NavLink, Project, SkillCategory, SocialLink, Testimonial } from './types';

export const navLinks: NavLink[] = [
  { name: 'About', hash: '#about' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Skills', hash: '#skills' },
  { name: 'Testimonials', hash: '#testimonials' },
  { name: 'Contact', hash: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sona-chavan/', icon: Linkedin },
  { name: 'GitHub', url: 'https://github.com/sona-chavan', icon: GitHub },
  { name: 'Dribbble', url: 'https://dribbble.com/sona-chavan', icon: DribbbleIcon },
  { name: 'Behance', url: 'https://www.behance.net/sona-chavan', icon: BehanceIcon },
  { name: 'Mail', url: 'mailto:sonachavan.dev@gmail.com', icon: Mail },
];

export const skillData: SkillCategory[] = [
  {
    title: 'Design',
    skills: ['UI/UX Design', 'Figma', 'Adobe XD', 'Illustrator', 'Photoshop', 'Wireframing', 'Prototyping'],
  },
  {
    title: 'Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Git'],
  },
];

export const projectsData: Project[] = [
  {
    title: 'Fintech App Design',
    description: 'A comprehensive design for a mobile banking application, focusing on user-friendly navigation and secure transaction flows.',
    tags: ['UI/UX', 'Figma', 'Prototyping'],
    imageUrl: "https://picsum.photos/seed/project-2/600/400",
    imageHint: "dashboard analytics"
  },
  {
    title: 'E-commerce Website',
    description: 'Developed a responsive e-commerce platform with Next.js, featuring product catalogs, a shopping cart, and a secure checkout process.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    imageUrl: "https://picsum.photos/seed/project-3/600/400",
    imageHint: "website shopping"
  },
  {
    title: 'Food Delivery App',
    description: 'A concept for a food delivery application, designed to provide a seamless ordering experience from browsing to delivery tracking.',
    tags: ['UI Design', 'Mobile App', 'Figma'],
    imageUrl: "https://picsum.photos/seed/project-1/600/400",
    imageHint: "app interface"
  },
];

export const testimonialsData: Testimonial[] = [
  {
    quote: "Sona is a very talented and creative designer. She was able to take our vague ideas and turn them into a beautiful and functional design. Her attention to detail is remarkable. We would definitely recommend her to anyone looking for a top-notch designer.",
    name: 'John Doe',
    title: 'CEO, Tech Solutions',
  },
  {
    quote: "Working with Sona was a fantastic experience. She is not only a skilled developer but also a great communicator. She kept us updated throughout the project and delivered a high-quality product on time. Her problem-solving skills are impressive.",
    name: 'Jane Smith',
    title: 'Project Manager, Creative Minds',
  },
  {
    quote: "The final product exceeded our expectations. Sona's ability to blend aesthetics with functionality is truly special. She has a deep understanding of user experience, which is evident in the intuitive design of our new website. Highly recommended!",
    name: 'Sam Wilson',
    title: 'Marketing Director, Innovate Co.',
  }
];
