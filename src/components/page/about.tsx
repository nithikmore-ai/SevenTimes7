import Image from 'next/image';
import SectionHeading from './section-heading';

export default function About() {
  return (
    <section id="about" className="w-full max-w-5xl py-24 sm:py-32 scroll-mt-28">
      <SectionHeading>About Me</SectionHeading>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="https://picsum.photos/seed/about-sona/500/500"
            alt="Portrait of Sona Chavan"
            width={250}
            height={250}
            quality={95}
            priority
            className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
            data-ai-hint="woman portrait"
          />
        </div>
        <div className="md:col-span-2 text-center md:text-left text-muted-foreground space-y-4">
          <p>
            Hello! I'm Sona, a passionate Product Designer and Frontend Developer with a knack for creating engaging and user-friendly digital experiences. With a background in both design and development, I bridge the gap between aesthetics and functionality to deliver products that are not only beautiful but also intuitive and efficient.
          </p>
          <p>
            My journey into the world of tech began with a curiosity for how things work, which quickly evolved into a passion for building and designing. I thrive in collaborative environments, working alongside cross-functional teams to solve complex problems and bring innovative ideas to life.
          </p>
          <p>
            When I'm not coding or designing, you can find me exploring new coffee shops, sketching, or getting lost in a good book. I believe in lifelong learning and am always eager to pick up new skills and technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
