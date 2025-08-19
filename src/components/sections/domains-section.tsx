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
      subtitle: "A Hyperlocal P2P Skill Exchange & Livelihood Platform",
      description: `To foster community development and promote the goals of the Atmanirbhar Bharat initiative, this platform will serve as a peer-to-peer (P2P) skill exchange, connecting local 'Gurus' (teachers) with 'Shishyas' (learners) in their vicinity.`,
      features: [
        "Secure User Authentication & Profiles",
        "Skill Listing & Discovery",
        "Geolocation-Based Search",
        "In-App Messaging System",
        "Review and Rating System"
      ],
      additionalFeatures: [
        "Integration with Government Skill Portals",
        "Vernacular Language Support",
        "Secure Mini-Payment Integration",
        "Group Workshop Module"
      ]
    },
    {
      title: "GramSeva",
      subtitle: "A Decentralized Digital Haat for Local Services & the Gig Economy",
      description: "The unorganized service sector in Tier-2/3 cities and rural areas lacks a structured, trustworthy digital platform. This solution will connect local service providers with customers in a secure and transparent environment.",
      features: [
        "Robust Task Management",
        "Real-Time Chat",
        "Secure Payment Escrow System",
        "Comprehensive Profile & Reputation System"
      ],
      additionalFeatures: [
        "AI-Powered Matchmaking",
        "Digital KYC and Verification",
        "Multilingual Voice-Note Support",
        "Dispute Resolution Mechanism"
      ]
    },
    {
      title: "Sahayak",
      subtitle: "An AI-Powered Multilingual Conversational Platform for University Student Onboarding & Support",
      description: "An AI-driven conversational assistant that acts as a one-stop source of information for students, available 24/7, providing instant, accurate, and personalized information.",
      features: [
        "Natural Language Processing (NLP)",
        "Comprehensive Knowledge Base",
        "Web-Based Chat Interface",
        "Basic Analytics Dashboard"
      ],
      additionalFeatures: [
        "Integration with University ERP",
        "Multilingual and Voice-Enabled",
        "Live Agent Handoff",
        "Proactive Notifications"
      ]
    }
  ],
  aiMl: [
    {
      title: "SecureAttend",
      subtitle: "A Real-Time, Liveness-Detection Enabled Facial Recognition System for Proctoring and Attendance",
      description: "An advanced facial recognition system that not only marks attendance but also ensures the authenticity of the individual using liveness detection, making it suitable for high-stakes environments.",
      features: [
        "High-Accuracy Face Recognition",
        "Centralized Attendance Database",
        "Administrator Dashboard"
      ],
      additionalFeatures: [
        "Robust Liveness Detection",
        "Mask and Obstruction Handling",
        "Real-Time Anomaly Alerts",
        "API for Integration"
      ]
    },
    {
      title: "Netra",
      subtitle: "An AI-Powered Dynamic Traffic Flow Optimization System for Smart Cities",
      description: "An intelligent system that analyzes real-time traffic camera feeds to dynamically control signal timings, thereby optimizing traffic flow, reducing congestion, and enabling faster transit for emergency vehicles.",
      features: [
        "Real-Time Vehicle Detection",
        "Traffic Density Calculation",
        "Dynamic Signal Timing Logic",
        "Simulation Dashboard"
      ],
      additionalFeatures: [
        "Emergency Vehicle Preemption",
        "Predictive Traffic Modeling",
        "Multi-Junction Coordination",
        "Pedestrian and Cyclist Detection"
      ]
    }
  ],
  blockchain: [
    {
      title: "BlockCertify",
      subtitle: "A Decentralized System for Immutable Proof of Originality and Academic Credential Verification",
      description: "A blockchain-based system where students and researchers can create an immutable, time-stamped proof of their original work and where institutions can issue tamper-proof digital credentials.",
      features: [
        "Proof of Originality",
        "Verification Interface",
        "Digital Wallet Integration"
      ],
      additionalFeatures: [
        "Verifiable Credential Issuance",
        "Zero-Knowledge Plagiarism Check",
        "Decentralized Storage (IPFS)"
      ]
    },
    {
      title: "AgriTrace",
      subtitle: "A Blockchain and IoT-Powered Supply Chain Traceability System for Agricultural Produce",
      description: "A farm-to-fork traceability solution using blockchain, IoT, and QR codes to create a transparent and immutable record of a product's journey, ensuring food safety and empowering both farmers and consumers.",
      features: [
        "Asset Tokenization",
        "Multi-Stakeholder Platform",
        "QR Code Generation & Scanning",
        "Immutable Ledger"
      ],
      additionalFeatures: [
        "IoT Sensor Integration",
        "Smart Contract-Based Payments",
        "AI-Powered Quality Check",
        "Integration with Government Portals"
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
