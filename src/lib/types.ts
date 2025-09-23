import { LucideIcon } from "lucide-react";
import React from "react";

export type NavLink = {
  name: string;
  href: string;
  external?: boolean;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageHint: string;
  liveUrl?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};
