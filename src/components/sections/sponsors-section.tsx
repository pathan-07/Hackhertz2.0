import Image from 'next/image';
import college from '@/assets/college.png';
import gap3Logo from '@/assets/gap3.png';
import creart from '@/assets/crearte.png';
import patelWeb from '@/assets/patelssit.png';
import vedspon from '@/assets/vedspon.png';
import AVISHKAR from '@/assets/AAVISHKAR.png';
import brain from '@/assets/brain.png';

const organizers = [
  {
    name: 'Shree Swaminarayan Institute Of Technology',
    logo: college,
    dataAiHint: 'college logo',
  },
];

const sponsors = [
  {
    name: 'GAP3',
    logo: gap3Logo,
    dataAiHint: 'sponsor logo',
    tier: 'Bronze',
  },
  {
    name: 'CREART',
    logo: creart,
    dataAiHint: 'sponsor logo',
    tier: 'Gold',
  },
  {
    name: 'AAVISHKAR CODEX INFOTECH LLP',
    logo: AVISHKAR,
    dataAiHint: 'sponsor logo',
    tier: 'Gold',
  },
  {
    name: 'VEDSHILL.CAREERS',
    logo: vedspon,
    dataAiHint: 'sponsor logo',
    tier: 'Silver',
  },  
  {
    name: 'PATEL WEB SOLUTION',
    logo: patelWeb,
    dataAiHint: 'sponsor logo',
    tier: 'Well Wishers',
  },  
  {
    name: 'BrainyBeam',
    logo: brain,
    dataAiHint: 'sponsor logo',
    tier: 'Well Wishers',
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
              <div className="h-48 w-full max-w-md mx-auto relative flex items-center justify-center mb-4">
                <Image
                  src={organizer.logo}
                  data-ai-hint={organizer.dataAiHint}
                  alt={organizer.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
              <p className="text-lg font-bold">{organizer.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Our <span className="text-gradient">Sponsors</span></h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">Thanks to our amazing sponsors for making this event possible.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="text-center">
              <div className="h-32 w-72 relative flex items-center justify-center mb-4">
                <Image
                  src={sponsor.logo}
                  data-ai-hint={sponsor.dataAiHint}
                  alt={sponsor.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="mx-auto"
                />
              </div>
              <p className="text-lg font-bold">{sponsor.name}</p>
              <p className={`text-base font-medium ${
                sponsor.tier === 'Gold' ? 'text-yellow-500' : 
                sponsor.tier === 'Silver' ? 'text-gray-400' : 
                sponsor.tier === 'Bronze' ? 'text-amber-700' : 
                'text-blue-500'
              }`}>
                {sponsor.tier === 'Well Wishers' ? sponsor.tier : `${sponsor.tier} Sponsor`}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
