import Image from 'next/image';
import SectionHeading from './section-heading';

export default function About() {
  return (
    <section id="about" className="w-full max-w-5xl pt-32 scroll-mt-28">
      <SectionHeading>The Vision</SectionHeading>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="https://images.unsplash.com/photo-1593418632104-71bd668d1af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxsdXh1cnklMjBicmFuZHxlbnwwfHx8fDE3NTg2MTI1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Portrait of the lead designer"
            width={300}
            height={300}
            quality={95}
            priority
            className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
            data-ai-hint="fashion model"
          />
        </div>
        <div className="md:col-span-2 text-center md:text-left text-muted-foreground space-y-4">
          <p>
            Welcome to 7x7 Fashion, where classic elegance meets modern innovation. We are a collective of digital artisans and fashion connoisseurs dedicated to crafting the future of style. Our work is a testament to the belief that fashion is not just about clothing, but about storytelling and identity.
          </p>
          <p>
            With a pulse on the ever-evolving trends of the fashion world, we create digital experiences that are as captivating and timeless as the brands we partner with. We specialize in bringing haute couture to the digital realm, ensuring every pixel reflects luxury and sophistication.
          </p>
          <p>
            Outside the digital atelier, we draw inspiration from the world's fashion capitals, timeless cinema, and the raw beauty of nature. We are perpetual students of art and design, constantly refining our craft to deliver unparalleled digital craftsmanship.
          </p>
        </div>
      </div>
    </section>
  );
}
