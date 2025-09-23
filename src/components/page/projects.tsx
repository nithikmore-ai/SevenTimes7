import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

type ProjectsProps = {
    limit?: number;
};

export default function Projects({ limit }: ProjectsProps) {
    const projects = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <section id="projects" className="w-full max-w-5xl pt-12 pb-24 sm:pt-16 sm:pb-32 scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link href={`/collections/${project.slug}`} key={index} className="flex" target="_blank" rel="noopener noreferrer">
            <Card className="flex flex-col overflow-hidden group hover:shadow-xl transition-shadow duration-300 w-full">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="aspect-video overflow-hidden rounded-md mb-4">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
