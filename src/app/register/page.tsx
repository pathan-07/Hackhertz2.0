import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { RegisterForm } from '@/components/register-form';

export default function RegisterPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto pt-32 pb-16">
          <div className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-xl border border-border/20">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">Registration Portal</h1>
              <p className="text-lg text-muted-foreground mt-2">Secure your place in the future of tech.</p>
            </div>
            <RegisterForm />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
