
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderLink = (link: (typeof navLinks)[0]) => {
    if (link.external) {
      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground/70 hover:text-primary transition-colors"
          onClick={() => isMenuOpen && setIsMenuOpen(false)}
        >
          {link.name}
        </a>
      );
    }
    return (
      <Link
        href={link.href}
        className="font-medium text-foreground/70 hover:text-primary transition-colors"
        onClick={() => isMenuOpen && setIsMenuOpen(false)}
      >
        {link.name}
      </Link>
    );
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="font-sans text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
          SevenTimes7 Fashion
        </Link>

        <nav className="hidden md:flex items-center gap-6 font-headline">
          {navLinks.map((link) => (
            <React.Fragment key={link.name}>{renderLink(link)}</React.Fragment>
          ))}
        </nav>

        <div className="md:hidden">
          <Button onClick={toggleMenu} variant="ghost" size="icon">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm pb-4">
          <nav className="flex flex-col items-center gap-4 pt-4 font-headline">
            {navLinks.map((link) => (
               <React.Fragment key={link.name}>{renderLink(link)}</React.Fragment>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
