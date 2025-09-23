import SectionHeading from './section-heading';

const brands = [
  { name: 'Gucci', logo: () => <span className="text-4xl font-serif">GUCCI</span> },
  { name: 'Prada', logo: () => <span className="text-4xl font-serif tracking-widest">PRADA</span> },
  { name: 'Chanel', logo: () => <span className="text-4xl font-serif">CHANEL</span> },
  { name: 'Louis Vuitton', logo: () => <span className="text-4xl font-serif">LOUIS VUITTON</span> },
  { name: 'Dior', logo: () => <span className="text-4xl font-serif">Dior</span> },
  { name: 'Versace', logo: () => <span className="text-4xl font-serif">VERSACE</span> },
  { name: 'Fendi', logo: () => <span className="text-4xl font-serif">FENDI</span> },
  { name: 'Armani', logo: () => <span className="text-4xl font-serif">ARMANI</span> },
];

export default function Brands() {
  return (
    <section id="brands" className="w-full max-w-5xl py-24 sm:py-32 scroll-mt-28">
      <SectionHeading>Brands We've Shaped</SectionHeading>
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-center">
          {brands.map((brand) => (
            <div key={brand.name} className="flex justify-center items-center">
              <div className="text-center text-muted-foreground/80 hover:text-foreground transition-colors">
                <brand.logo />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background pointer-events-none" />
      </div>
    </section>
  );
}
