import { socialLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-6 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-secondary-foreground/70 hover:text-primary transition-colors"
            >
              <link.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-2 font-headline italic">
            "Style is a way to say who you are without having to speak."
        </p>
        <small className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} FASHION NXT. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
