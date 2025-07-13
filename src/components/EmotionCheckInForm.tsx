
"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { generateMicroSuggestions } from "@/ai/flows/generate-micro-suggestions";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Loader2, Smile, Frown, Brain, Angry, Zap, Feather } from "lucide-react";

const emotions = [
  { name: "Happy", icon: Smile, colors: "bg-yellow-100/40 text-yellow-800 ring-yellow-300" },
  { name: "Sad", icon: Frown, colors: "bg-blue-100/40 text-blue-800 ring-blue-300" },
  { name: "Anxious", icon: Brain, colors: "bg-purple-100/40 text-purple-800 ring-purple-300" },
  { name: "Angry", icon: Angry, colors: "bg-red-100/40 text-red-800 ring-red-300" },
  { name: "Stressed", icon: Zap, colors: "bg-gray-200/40 text-gray-800 ring-gray-300" },
  { name: "Calm", icon: Feather, colors: "bg-green-100/40 text-green-800 ring-green-300" },
];

const formSchema = z.object({
  emotion: z.string().min(1, "Please select an emotion."),
  intensity: z.array(z.number()).default([5]),
  situation: z.string().min(10, "Please describe your situation in at least 10 characters.").max(500, "Please keep your description under 500 characters."),
  includeCampusResources: z.boolean().default(false).optional(),
  campusSupportServices: z.string().optional(),
}).refine(data => {
    if (data.includeCampusResources) {
        return data.campusSupportServices && data.campusSupportServices.length > 0;
    }
    return true;
}, {
    message: "Please list some campus resources if you'd like to include them.",
    path: ["campusSupportServices"],
});

type FormValues = z.infer<typeof formSchema>;

export default function EmotionCheckInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emotion: "",
      intensity: [5],
      situation: "",
      includeCampusResources: false,
      campusSupportServices: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    try {
      const intensityValue = values.intensity[0];
      let intensityStr: string;
      if (intensityValue <= 3) intensityStr = "low";
      else if (intensityValue <= 7) intensityStr = "medium";
      else intensityStr = "high";
      
      const result = await generateMicroSuggestions({
        emotion: values.emotion,
        intensity: intensityStr,
        situation: values.situation,
        campusSupportServices: values.includeCampusResources ? values.campusSupportServices : undefined,
      });

      if (result && result.personalizedSuggestions) {
        const encodedSuggestions = encodeURIComponent(JSON.stringify(result));
        router.push(`/suggestions?suggestions=${encodedSuggestions}`);
      } else {
        toast({ variant: "destructive", title: "Error", description: "Couldn't generate suggestions. Please try again." });
      }
    } catch (error) {
      console.error("Error generating suggestions:", error);
      toast({ variant: "destructive", title: "An Error Occurred", description: "We had trouble connecting to the AI. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="max-w-2xl mx-auto mt-10 shadow-lg">
      <div className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
            <FormField
              control={form.control}
              name="emotion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold text-center block mb-4">1. How are you feeling right now?</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-3 gap-4">
                      {emotions.map(({ name, icon: Icon, colors }) => (
                        <Card
                          key={name}
                          onClick={() => field.onChange(name)}
                          className={cn(
                            "cursor-pointer transition-all duration-200 hover:shadow-xl hover:-translate-y-1",
                            "border-border hover:border-primary/50",
                            field.value === name 
                              ? `${colors} ring-2 shadow-lg`
                              : "border-border"
                          )}
                        >
                          <div className="p-4 flex flex-col items-center justify-center">
                            <Icon className="w-8 h-8 mb-2" strokeWidth={1.5} />
                            <span className={cn(
                              "text-sm font-medium",
                               field.value === name ? "" : "text-muted-foreground"
                            )}>{name}</span>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />

            <Separator />
            
            <FormField
              control={form.control}
              name="intensity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold block text-center mb-6">2. How strong is this feeling?</FormLabel>
                  <FormControl>
                    <Slider
                      min={1}
                      max={10}
                      step={1}
                      value={field.value}
                      onValueChange={field.onChange}
                      className="w-3/4 mx-auto"
                    />
                  </FormControl>
                   <div className="flex justify-between text-xs text-muted-foreground w-3/4 mx-auto mt-2">
                        <span>Not so strong</span>
                        <span>Very strong</span>
                    </div>
                </FormItem>
              )}
            />

            <Separator />

            <FormField
              control={form.control}
              name="situation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold block text-center mb-4">3. What's on your mind?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., I have a big exam tomorrow and I'm feeling overwhelmed."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            <FormField
              control={form.control}
              name="includeCampusResources"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                   <FormControl>
                     <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                   </FormControl>
                   <div className="space-y-1 leading-none">
                     <FormLabel>
                        Incorporate campus support services into my suggestions?
                     </FormLabel>
                   </div>
                </FormItem>
              )}
            />

            {form.watch("includeCampusResources") && (
                 <FormField
                 control={form.control}
                 name="campusSupportServices"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Available Campus Resources</FormLabel>
                     <FormControl>
                       <Textarea
                         placeholder="e.g., University Counseling Center, Academic Success Center, Student Health Services"
                         className="resize-none"
                         {...field}
                       />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
            )}

            <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Get My Suggestions
            </Button>
          </form>
        </Form>
      </div>
    </Card>
  );
}
