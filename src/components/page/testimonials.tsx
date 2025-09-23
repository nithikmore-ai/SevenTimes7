'use client';

import SectionHeading from './section-heading';
import { testimonialsData } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full max-w-5xl py-24 sm:py-32 scroll-mt-28">
      <SectionHeading>Words from the Industry</SectionHeading>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        className="w-full"
      >
        <CarouselContent>
          {testimonialsData.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="flex flex-col justify-between h-full shadow-lg">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center gap-4">
                    <Quote className="w-8 h-8 text-primary" />
                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-primary font-headline">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
