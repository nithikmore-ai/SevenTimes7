import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

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
          <Card key={index} className="flex flex-col overflow-hidden group hover:shadow-xl transition-shadow duration-300">
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
            <CardFooter className="flex flex-col items-start gap-4">
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                        {tag}
                    </Badge>
                    ))}
                </div>
                 {project.liveUrl && (
                    <Button asChild variant="outline" size="sm">
                        <Link href={project.liveUrl} target="_blank">
                            Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                 )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
