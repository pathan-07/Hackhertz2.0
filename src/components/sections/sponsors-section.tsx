import Image from 'next/image';

const sponsors = [
  {
    name: 'Shree Swaminarayan Institute Of Technology',
    logo: 'https://placehold.co/300x100.png',
    dataAiHint: 'college logo',
    title: 'Title Sponsor',
  },
  {
    name: 'Computer Department',
    logo: 'https://placehold.co/300x100.png',
    dataAiHint: 'department logo',
    title: 'Academic Partner',
  },
];

export function SponsorsSection() {
  return (
    <section id="sponsors" className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">Our <span className="text-gradient">Supporters</span></h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Proudly supported by our institutional partners.</p>
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
            <p className="text-muted-foreground">{sponsor.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
