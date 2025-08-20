'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Globe, Cpu, Link, Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

// --- DATA (No changes made here) ---
const problemStatements = {
  webDev: [
    {
      title: "BharatSkill Connect",
      subtitle: "Hyperlocal P2P Skill Exchange",
      description: "Connect local Gurus and Shishyas for skill exchange and livelihood.",
      features: [
        "User Authentication",
        "Skill Listing",
        "Geolocation Search",
        "Messaging",
        "Reviews & Ratings"
      ],
      additionalFeatures: [
        "Govt Portal Integration",
        "Vernacular Support",
        "Mini-Payments",
        "Group Workshops"
      ]
    },
    {
      title: "GramSeva",
      subtitle: "Digital Haat for Local Services",
      description: "Connect rural service providers with customers securely.",
      features: [
        "Task Management",
        "Real-Time Chat",
        "Payment Escrow",
        "Profile & Reputation"
      ],
      additionalFeatures: [
        "AI Matchmaking",
        "Digital KYC",
        "Voice-Note Support",
        "Dispute Resolution"
      ]
    },
    {
      title: "SwachhGrid",
      subtitle: "AI-Powered Smart Waste Management",
      description: "Real-time monitoring and route optimization for efficient waste collection.",
      features: [
        "Real-Time Visualization Dashboard",
        "Real-Time Data Collection",
        "Historical Analytics", 
        "Automated Alerting System"
      ],
      additionalFeatures: [
        "AI-Powered Route Optimization",
        "Predictive Fill-Level Analytics",
        "Waste Segregation Monitoring",
        "Citizen Engagement Portal",
        "Gamification & Reporting"
      ]
    },
    {
      title: "Sahayak",
      subtitle: "AI-Powered Multilingual Student Support Platform",
      description: "Conversational assistant for university student onboarding and support.",
      features: [
        "NLP Core Engine",
        "Comprehensive Knowledge Base",
        "Clean Web UI",
        "Text to Speech, Speech to Text & Speech to Speech",
        "Administrator Dashboard"
      ],
      additionalFeatures: [
        "ERP Integration",
        "Multilingual & Voice Support",
        "Live Agent Handoff",
        "Proactive Notifications",
        "Sentiment Analysis"
      ]
    },
    {
      title: "DigiPratibha",
      subtitle: "Digital Portfolio for Students",
      description: "No-code platform for students to build and share portfolios.",
      features: [
        "Drag-and-Drop Builder",
        "Templates",
        "Content Integration",
        "One-Click Hosting",
        "PDF Export",
        "User Management"
      ],
      additionalFeatures: [
        "AI Content Assistant",
        "Institution Dashboard",  
        "DigiLocker Integration",
        "Skill Visualization",
        "Vernacular Support"
      ]
    },
  ],
  aiMl: [
    {
      title: "SecureAttend",
      subtitle: "Liveness-Enabled Face Recognition",
      description: "Real-time facial recognition for secure attendance.",
      features: [
        "Face Recognition",
        "Attendance Database",
        "Mask and obstruction handling",
        "Admin Dashboard"
      ],
      additionalFeatures: [
        "Liveness Detection",
        "Mask Handling",
        "Anomaly Alerts",
        "API Integration"
      ]
    },
    {
      title: "ManasFit",
      subtitle: "AI Platform for Student Mental & Physical Wellness",
      description: "Holistic wellness tracking and AI-powered support for students.",
      features: [
        "Unified Wellness Tracker",
        "AI Conversational Agent",
        "Personalized Visualization Dashboard",
        "Curated Resource Hub"
      ],
      additionalFeatures: [
        "Correlation & Nudge Engine",
        "Anonymized Institutional Dashboard",
        "Intelligent Alert System",
        "Gamification & Guided Modules"
      ]
    },
    {
      title: "VidyaSaathi",
      subtitle: "AI-Powered Scholarship Recommendation System",
      description: "Personalized scholarship matching for enhanced educational equity.",
      features: [
        "Intelligent User Profiling",
        "AI-Powered Matching Engine",
        "Personalized Dashboard",
        "Automated Eligibility Checking"
      ],
      additionalFeatures: [
        "Dynamic Scholarship Updates",
        "NLP-Based Criteria Understanding",
        "Smart Alert System",
        "Community Forum & Multilingual Support"
      ]
    },
    {
      title: "Netra",
      subtitle: "AI Traffic Optimization",
      description: "Optimize city traffic using real-time AI analysis.",
      features: [
        "Vehicle Detection",
        "Density Calculation",
        "Signal Timing",
        "Simulation Dashboard"
      ],
      additionalFeatures: [
        "Emergency Preemption",
        "Predictive Modeling",
        "Multi-Junction Coordination",
        "Pedestrian Detection"
      ]
    }
  ],
  blockchain: [
    {
      title: "BlockCertify",
      subtitle: "Decentralized Credential Verification",
      description: "Blockchain-based proof of originality and credential issuance.",
      features: [
        "Proof of Originality",
        "Verification Interface",
        "Wallet Integration"
      ],
      additionalFeatures: [
        "Credential Issuance",
        "Plagiarism Check",
        "Decentralized Storage"
      ]
    },
    {
      title: "AgriTrace",
      subtitle: "Blockchain Supply Chain for Agriculture",
      description: "Farm-to-fork traceability using blockchain and IoT.",
      features: [
        "Asset Tokenization",
        "Stakeholder Platform",
        "QR Code System",
        "Immutable Ledger"
      ],
      additionalFeatures: [
        "IoT Integration",
        "Smart Payments",
        "AI Quality Check",
        "Govt Portal Integration"
      ]
    }
  ]
};

const domains = [
  {
    icon: <Globe className="w-10 h-10 text-gradient" />,
    title: 'Web Development',
    description: 'Create dynamic and responsive web applications for social impact and smart communication.',
    key: 'webDev' as const
  },
  {
    icon: <Cpu className="w-10 h-10 text-gradient" />,
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Build intelligent systems that can learn, adapt, and solve complex problems using artificial intelligence.',
    key: 'aiMl' as const
  },
  {
    icon: <Link className="w-10 h-10 text-gradient" />,
    title: 'Blockchain',
    description: 'Create decentralized applications and explore blockchain technology solutions for real-world problems.',
    key: 'blockchain' as const
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// --- Reusable Components ---
const ProblemStatementCard = ({ problem }: { problem: typeof problemStatements.webDev[0] }) => {
  return (
    <Card className="bg-background/80 border-border h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl text-gradient">{problem.title}</CardTitle>
        <p className="text-sm font-medium text-muted-foreground">{problem.subtitle}</p>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col space-y-4">
        <p className="text-sm text-muted-foreground flex-grow">{problem.description}</p>
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-bold mb-2 text-foreground">Must-Have Features:</h4>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              {problem.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-2 text-foreground">Additional Features:</h4>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              {problem.additionalFeatures.map((feature, idx) => <li key={idx}>{feature}</li>)}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// --- Main Section Component ---
export function DomainsSection() {
  const [selectedDomain, setSelectedDomain] = useState<typeof domains[0] | null>(null);
  
  return (
    <section id="domains" className="container mx-auto py-16">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Problem <span className="text-gradient">Domains</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto"
        >
          Explore our innovative problem statements across these cutting-edge domains.
        </motion.p>
      </div>

      {/* --- Domain Selection Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
        {domains.map((domain, index) => (
          <motion.div
            key={domain.key}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03, y: -8 }}
            className="w-full"
          >
            <Dialog>
              <DialogTrigger asChild>
                <Card className="h-full cursor-pointer bg-background/80 border-border hover:ring-2 hover:ring-primary transition-all duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {domain.icon}
                    <CardTitle className="text-xl">{domain.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{domain.description}</p>
                    <div className="mt-4 text-sm text-primary font-semibold">
                      Click to view problem statements
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-6xl w-[95vw] h-[90vh] bg-background/95 backdrop-blur-sm border-border flex flex-col">
                <DialogHeader className="pr-10">
                  <DialogTitle className="text-2xl md:text-3xl font-bold">
                    {domain.title}: <span className="text-gradient">Problem Statements</span>
                  </DialogTitle>
                </DialogHeader>
                <div className="flex-grow overflow-hidden">
                  <ScrollArea className="h-full pr-6">
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                      >
                        {problemStatements[domain.key].map((problem) => (
                          <motion.div key={problem.title} variants={itemVariants} className="h-full">
                            <ProblemStatementCard problem={problem} />
                          </motion.div>
                        ))}
                      </motion.div>
                  </ScrollArea>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
