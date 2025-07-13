
import { Brain, Coffee, Smartphone, Moon, HeartHandshake, type LucideIcon } from 'lucide-react';

export type ResourceCategory = "Focus & Productivity" | "Emotional Well-being" | "Digital Detox" | "Sleep & Rest" | "Crisis & Support" | "All";

export type Resource = {
    id: number;
    category: ResourceCategory;
    icon: LucideIcon;
    title: string;
    summary: string;
    details: (string | { text: string; url: string })[];
};

export const resourcesData: Resource[] = [
    {
        id: 1,
        category: 'Focus & Productivity',
        icon: Coffee,
        title: 'Study Burnout Prevention',
        summary: 'Quick ways to prevent academic overload and stay motivated.',
        details: [
            "Use the Pomodoro Technique: Work for 25 minutes, then take a 5-minute break.",
            "Set realistic daily goals. It's better to accomplish small tasks than to plan too much and do nothing.",
            "Change your study environment. A new location can boost focus.",
            "Stay hydrated and have healthy snacks nearby."
        ]
    },
    {
        id: 2,
        category: 'Emotional Well-being',
        icon: Brain,
        title: 'Managing Anxiety',
        summary: 'Simple techniques to calm an anxious mind during stressful times.',
        details: [
            "Practice the 4-7-8 breathing technique: Inhale for 4s, hold for 7s, exhale for 8s.",
            "Try not to self-shame when you're tired. Rest is productive too.",
            "Write down your worries in a journal. Getting them out of your head can provide relief.",
            { text: "Explore guided meditations on YouTube", url: "https://www.youtube.com/results?search_query=guided+meditation+for+anxiety" }
        ]
    },
    {
        id: 3,
        category: 'Digital Detox',
        icon: Smartphone,
        title: 'Mindful Tech Use',
        summary: 'Strategies to reduce screen time and be more present.',
        details: [
            "Put your phone on grayscale during study sessions to make it less appealing.",
            "Set 'no-phone' zones, like your dinner table or your bed.",
            "Turn off non-essential notifications.",
            "Schedule specific times to check social media instead of checking it randomly."
        ]
    },
    {
        id: 4,
        category: 'Sleep & Rest',
        icon: Moon,
        title: 'Improving Sleep Quality',
        summary: 'Tips for a more restful night and a more energetic day.',
        details: [
            "Avoid screens (phone, laptop) for at least 30 minutes before bed.",
            "Create a relaxing pre-sleep routine, like reading a book or listening to calm music.",
            "Try to go to bed and wake up around the same time each day, even on weekends.",
            "Ensure your room is dark, quiet, and cool."
        ]
    },
    {
        id: 5,
        category: 'Crisis & Support',
        icon: HeartHandshake,
        title: 'Getting Help',
        summary: 'It is a sign of strength to ask for help. Here are some resources.',
        details: [
            { text: "Crisis Text Line: Text HOME to 741741", url: "https://www.crisistextline.org/" },
            { text: "The Trevor Project (for LGBTQ youth)", url: "https://www.thetrevorproject.org/get-help/" },
            { text: "National Suicide Prevention Lifeline: Call 988", url: "https://988lifeline.org/" },
            "If you are on campus, check for your university's counseling and psychological services."
        ]
    },
    {
        id: 6,
        category: 'Focus & Productivity',
        icon: Coffee,
        title: 'Overcoming Procrastination',
        summary: 'Actionable steps to stop delaying and start doing.',
        details: [
           "Break down large tasks into smaller, manageable steps. The first step is often the hardest.",
           "Use the '2-Minute Rule': If a task takes less than two minutes, do it immediately.",
           "Reward yourself after completing a task.",
           "Identify your 'why'. Connecting a task to your larger goals can increase motivation."
        ]
    }
];
