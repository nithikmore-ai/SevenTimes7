import Header from '@/components/page/header';
import Hero from '@/components/page/hero';
import About from '@/components/page/about';
import Skills from '@/components/page/skills';
import Projects from '@/components/page/projects';
import Testimonials from '@/components/page/testimonials';
import Contact from '@/components/page/contact';
import Footer from '@/components/page/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Brands from '@/components/page/brands';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex flex-col items-center px-4">
        <Hero />
        <About />
        <Projects limit={3} />
        <div className="text-center -mt-16 mb-24 sm:-mt-20 sm:mb-32">
            <Button asChild variant="outline">
                <Link href="/collections">
                    View All Collections <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
        <Skills />
        <Brands />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
