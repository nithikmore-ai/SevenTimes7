import { projectsData } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Header from '@/components/page/header';
import Footer from '@/components/page/footer';

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-28 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="outline">
              <Link href="/collections">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Collections
              </Link>
            </Button>
          </div>

          <article>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline mb-4">
              {project.title}
            </h1>
            
            <div className="aspect-video relative overflow-hidden rounded-lg mb-8 shadow-lg">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                data-ai-hint={project.imageHint}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-muted-foreground space-y-4">
                <p className="text-xl">{project.description}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 font-headline text-primary">Technologies & Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {project.liveUrl && (
              <div className="mt-12 text-center">
                <Button asChild size="lg">
                  <Link href={project.liveUrl} target="_blank">
                    Visit Live Site <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}
