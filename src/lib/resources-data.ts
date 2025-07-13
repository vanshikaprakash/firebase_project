
import { Brain, Coffee, Smartphone, Moon, HeartHandshake, Zap, Wind, BookOpen, ExternalLink, type LucideIcon } from 'lucide-react';

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

// --- New Data Structures ---

// 1. Featured Toolkit
export const featuredToolkit = {
    title: "Exam Week Reset Kit",
    tools: [
        { name: "5-Minute Breathing Exercise", icon: Wind },
        { name: "Timeboxing Planner", icon: Coffee },
        { name: "Digital Detox Checklist", icon: Smartphone },
        { name: "Quick Reflection Prompt", icon: BookOpen }
    ]
};

// 2. Student-Sourced Advice
export const studentAdvice = [
    { text: "You don't have to have your whole future figured out. It's okay to just focus on the next right step.", category: "Anxiety" },
    { text: "Handing in something 'good enough' is better than not handing in something 'perfect'.", category: "Burnout" },
    { text: "I told my professor I was struggling and they were surprisingly understanding. It's worth a shot.", category: "Procrastination" },
    { text: "Scheduling 'worry time' sounds silly, but it actually helps me not to stress all day.", category: "Anxiety" },
];

// 3. Helpful External Links
export const externalLinks = [
    { title: "NIMH", description: "The National Institute of Mental Health offers authoritative information on mental disorders.", url: "https://www.nimh.nih.gov/health" },
    { title: "7 Cups", description: "Connect with caring listeners for free emotional support.", url: "https://www.7cups.com/" },
    { title: "Calm", description: "A popular app for sleep, meditation, and relaxation.", url: "https://www.calm.com/" },
    { title: "Notion Templates for Students", description: "Organize your academic life with these free templates.", url: "https://www.notion.so/templates/categories/students" }
];

// 4. Weekly Micro-Challenges
export const weeklyChallenges = [
    "This week’s challenge: Take a 5-minute walk before opening social media each morning.",
    "This week’s challenge: Drink a full glass of water as soon as you wake up.",
    "This week’s challenge: Write down one thing you're grateful for before bed.",
    "This week’s challenge: Tidy your desk for 2 minutes at the end of each study session."
];
