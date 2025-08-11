'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';

// Dynamically import the robot animation
const TimelineRobot = dynamic(() => import('@/components/timeline-robot'), {
  ssr: false,
  loading: () => null
});

const timelineEvents = [
  {
    day: 'Day 1',
    title: 'Registration',
    description: 'Opening ceremony starts 8:00 AM onwards, rules, and problem statement announcement.',
  },
  {
    day: 'Day 1',
    title: 'Inauguration',
    description: 'Inauguration ceremony starts 9:30 AM onwards with keynote speakers and sponsors.',
  },
  {
    day: 'Day 1',
    title: 'Building Begins',
    description: 'Coding and idea execution starts 10:30 AM onwards.',
  },
  {
    day: 'Day 1',
    title: 'Mid Evaluation',
    description: 'Documentation round (PPT) starts at 5:00 PM onwards.',
  },
  {
    day: 'Day 2',
    title: 'Final Evaluation',
    description: 'Finalize projects and prepare video with github repo  starts at 8:00 AM onwards.',
  },
  {
    day: 'Day 2',
    title: 'Semi-Finalist Declaration',
    description: 'Selecting top 10 teams at 1:00 PM onwards.',
  },
  {
    day: 'Day 2',
    title: 'Presentation Round',
    description: 'Presentation with the final project starts 1:30 PM onwards.',
  },
    {
    day: 'Day 2',
    title: 'Final Round',
    description: 'Final Evalution starts 3:00 PM onwards.',
  },
  {
    day: 'Day 2',
    title: 'Winner Decration',
    description: 'Winners will declare & price distribution starts 3:30 PM onwards.',
  },  
  {
    day: 'Day 2',
    title: 'Wrapping Up',
    description: 'Wrapping up everything at 4:00 PM onwards.',
  },  
];

export function TimelineSection() {
  return (
    <section id="timeline" className="container mx-auto">
      {/* Advanced robot animation that follows scroll position */}
      <TimelineRobot />
      
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">Event <span className="text-gradient">Timeline</span></h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Mark your calendars for these important dates.</p>
      </div>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 w-1 h-full bg-border/50 -translate-x-1/2"></div>
        {timelineEvents.map((event, index) => {
          const isLeft = index % 2 !== 0;
          return (
            <div key={event.title} className="relative pl-8 md:pl-0 mb-8">
              <div
                className={cn('md:flex items-center', {
                  'md:justify-end': isLeft,
                })}
              >
                <div
                  className={cn('md:w-1/2', {
                    'md:pr-8 md:text-right': !isLeft,
                    'md:pl-8 md:text-left': isLeft,
                  })}
                >
                  <Card variant="tech">
                    <CardHeader>
                      <CardTitle>
                        <span className="text-gradient font-bold">
                          {event.day}:
                        </span>{' '}
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="absolute top-1 left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-background"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
