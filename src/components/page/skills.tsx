import SectionHeading from './section-heading';
import { skillData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-5xl py-24 sm:py-32 scroll-mt-28">
      <SectionHeading>My Skills</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillData.map((category, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-center text-xl text-primary">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="text-md px-4 py-2 bg-secondary text-secondary-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
