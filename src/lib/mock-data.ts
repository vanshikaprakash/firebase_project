export type Reflection = {
  id: number;
  author: string;
  emotion: string;
  text: string;
  isAnonymous: boolean;
  timestamp: string;
};

export const mockReflections: Reflection[] = [
  {
    id: 1,
    author: "StudentA",
    emotion: "Feeling Overwhelmed",
    text: "Midterms are really getting to me. It feels like there's a mountain of work and not enough time. Trying to take it one day at a time.",
    isAnonymous: true,
    timestamp: "Oct 26",
  },
  {
    id: 2,
    author: "Chris P.",
    emotion: "A Moment of Calm",
    text: "Took a walk around campus today without my phone. The autumn leaves were beautiful. It's the small moments that help.",
    isAnonymous: false,
    timestamp: "Oct 25",
  },
  {
    id: 3,
    author: "Jess",
    emotion: "Anxious about the Future",
    text: "Senior year is scary. So much pressure to have it all figured out. Just wanted to put this out there in case anyone else feels the same.",
    isAnonymous: true,
    timestamp: "Oct 24",
  },
  {
    id: 4,
    author: "Anonymous",
    emotion: "Small Victory",
    text: "I finally finished a paper I've been procrastinating on for a week. It wasn't perfect, but it's done. Feeling proud of myself.",
    isAnonymous: true,
    timestamp: "Oct 23",
  },
  {
    id: 5,
    author: "Jordan",
    emotion: "Missing Home",
    text: "First year away from home has been tougher than I expected. Some days are just hard. Hoping it gets easier.",
    isAnonymous: false,
    timestamp: "Oct 22",
  },
  {
    id: 6,
    author: "Sam",
    emotion: "Grateful",
    text: "My study group was so supportive today. We all helped each other understand the material. Feeling grateful for good friends.",
    isAnonymous: true,
    timestamp: "Oct 21",
  },
];
