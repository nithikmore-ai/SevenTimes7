import Header from '@/components/page/header';
import Hero from '@/components/page/hero';
import About from '@/components/page/about';
import Skills from '@/components/page/skills';
import Projects from '@/components/page/projects';
import Testimonials from '@/components/page/testimonials';
import Contact from '@/components/page/contact';
import Footer from '@/components/page/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex flex-col items-center px-4">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
