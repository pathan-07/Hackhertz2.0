'use client';
import { useState, useTransition } from 'react';
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegistrationSchema, type RegistrationInput } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles } from 'lucide-react';
import { getTrackSuggestions } from '@/app/register/actions';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

export function RegisterForm() {
  const [step, setStep] = useState(1);
  const [isPending, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<RegistrationInput>({
    resolver: zodResolver(RegistrationSchema),
    defaultValues: {
      teamName: '',
      college: 'Shree Swaminarayan Institute Of Technology',
      teamSize: 4,
      members: Array.from({ length: 4 }, () => ({ name: '', email: '', isLeader: false })),
      skills: '',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'members',
  });

  const handleTeamSizeChange = (value: string) => {
    const newSize = parseInt(value, 10);
    form.setValue('teamSize', newSize);
    const currentSize = fields.length;
    if (newSize > currentSize) {
      for (let i = currentSize; i < newSize; i++) {
        append({ name: '', email: '', isLeader: false });
      }
    } else if (newSize < currentSize) {
      for (let i = currentSize; i > newSize; i--) {
        remove(i - 1);
      }
    }
    form.setValue('members.0.isLeader', true);
  };
  
  async function processData(data: RegistrationInput) {
    // In a real application, this would submit to a backend.
    console.log(data);
    toast({
      title: 'Registration Submitted!',
      description: 'Your team is now registered for HackHertz. Check your email for confirmation.',
      variant: 'default'
    });
    // Maybe reset form or redirect
    // form.reset();
    // setStep(1);
  }

  const nextStep = async () => {
    const fieldsToValidate = step === 1 ? ['teamName', 'college', 'teamSize'] : step === 2 ? ['members'] : [];
    const isValid = await form.trigger(fieldsToValidate as any);
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };
  const prevStep = () => setStep((prev) => prev - 1);

  const handleGetSuggestions = () => {
    const skills = form.getValues('skills');
    startTransition(async () => {
      const result = await getTrackSuggestions({ skills });
      if (result.suggestions && result.suggestions.length > 0) {
        setSuggestions(result.suggestions);
      } else {
        toast({
          title: 'Error',
          description: result.message,
          variant: 'destructive',
        });
      }
    });
  }

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(processData)} className="space-y-8">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-headline text-gradient">Step 1: Team Information</h3>
              <FormField
                control={form.control}
                name="teamName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., The Glitch Mob" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="college"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>College/Organization</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="teamSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Size</FormLabel>
                    <Select onValueChange={handleTeamSizeChange} defaultValue={String(field.value)}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="4">4 Members</SelectItem>
                        <SelectItem value="5">5 Members</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button onClick={nextStep} className="w-full">Next Step</Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-headline text-gradient">Step 2: Member Details</h3>
              {fields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-border/20 p-4 rounded-lg">
                  <FormField
                    control={form.control}
                    name={`members.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Member {index + 1} Name {index === 0 && '(Leader)'}</FormLabel>
                        <FormControl>
                          <Input placeholder="Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`members.${index}.email`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Member {index + 1} Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Email Address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
               <div className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>Previous</Button>
                <Button onClick={nextStep}>Next Step</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-headline text-gradient">Step 3: Skills & Payment</h3>
               <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Skills</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe your team's skills, e.g., React, Python, UI/UX Design, Blockchain..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="button" variant="outline" onClick={handleGetSuggestions} disabled={isPending}>
                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                Get Track Suggestions
              </Button>

              {suggestions.length > 0 && (
                 <Alert>
                    <Sparkles className="h-4 w-4" />
                    <AlertTitle className="font-headline">AI Suggested Tracks</AlertTitle>
                    <AlertDescription>
                        <ul className="list-disc pl-5 mt-2">
                        {suggestions.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                    </AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <Label>Payment (₹50 per person)</Label>
                <p className="text-sm text-muted-foreground">Scan the QR code to complete payment, then upload the screenshot.</p>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <Image src="https://placehold.co/200x200.png" data-ai-hint="qr code" alt="Payment QR Code" width={200} height={200} className="rounded-md" />
                    <FormField
                    control={form.control}
                    name="paymentScreenshot"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel>Upload Screenshot</FormLabel>
                        <FormControl>
                            <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
              </div>


              <div className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>Previous</Button>
                <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Submit Registration
                </Button>
              </div>
            </div>
          )}
        </form>
      </Form>
    </FormProvider>
  );
}
