import Footer from '@/components/page/footer';
import Header from '@/components/page/header';
import Projects from '@/components/page/projects';

export default function CollectionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex flex-col items-center px-4 pt-28">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
