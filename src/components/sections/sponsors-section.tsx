import Image from 'next/image';
import college from '@/assets/college.png';
import gap3Logo from '@/assets/gap3.png';

const organizers = [
  {
    name: 'Shree Swaminarayan Institute Of Technology',
    logo: college,
    dataAiHint: 'college logo',
    title: 'Organized by',
  },
];

const sponsors = [
  {
    name: 'GAP3',
    logo: gap3Logo,
    dataAiHint: 'sponsor logo',
    tier: 'Bronze',
  },
];

export function SponsorsSection() {
  return (
    <div className="py-16">
      {/* Organizers Section */}
      <section id="organizers" className="container mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Our <span className="text-gradient">Organizer</span></h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Proudly supported by our institute.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {organizers.map((organizer) => (
            <div key={organizer.name} className="text-center">
              <Image
                src={organizer.logo}
                data-ai-hint={organizer.dataAiHint}
                alt={organizer.name}
                width={200}
                height={80}
                className="mx-auto mb-2"
              />
              <p className="font-bold">{organizer.name}</p>
              <p className="text-muted-foreground">{organizer.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Our <span className="text-gradient">Sponsors</span></h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Thanks to our amazing sponsors for making this event possible.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="text-center">
              <Image
                src={sponsor.logo}
                data-ai-hint={sponsor.dataAiHint}
                alt={sponsor.name}
                width={200}
                height={80}
                className="mx-auto mb-2"
              />
              <p className="font-bold">{sponsor.name}</p>
              <p className="text-muted-foreground">{sponsor.tier} Sponsor</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
