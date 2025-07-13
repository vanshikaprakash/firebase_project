
import { type Resource } from '@/lib/resources-data';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
    resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
    const { icon: Icon, title, summary, details } = resource;

    return (
        <Card className="flex flex-col">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${resource.id}`} className="border-b-0">
                    <CardHeader className="items-center text-center p-6 pb-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                           <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg font-headline">{title}</CardTitle>
                        <CardDescription className="text-sm">{summary}</CardDescription>
                    </CardHeader>

                    <div className="p-6 pt-2">
                         <AccordionTrigger className={cn(buttonVariants({ variant: 'outline' }), 'w-full no-underline')}>
                            Read More
                        </AccordionTrigger>
                    </div>

                    <AccordionContent className="p-6 pt-0">
                       <div className="space-y-4 text-sm text-muted-foreground">
                            {details.map((detail, index) => (
                                <div key={index}>
                                    {typeof detail === 'string' ? (
                                        <p>&bull; {detail}</p>
                                    ) : (
                                        <p>&bull; <Link href={detail.url} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                                            {detail.text}
                                            </Link>
                                        </p>
                                    )}
                                </div>
                            ))}
                       </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Card>
    );
}
