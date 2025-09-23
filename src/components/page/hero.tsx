import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="w-full max-w-5xl min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary font-headline">
          FASHION NXT
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-foreground/80">
          Digital Couture & Brand Innovation
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
          We sculpt the future of fashion, weaving technology and artistry into unforgettable brand narratives and digital showcases.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#projects">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              View The Collections
            </Button>
          </Link>
          <Link href="#contact">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Collaborate With Us
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
         <Link href="#about" aria-label="Scroll to about section">
            <MoveDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
         </Link>
      </div>
    </section>
  );
}
