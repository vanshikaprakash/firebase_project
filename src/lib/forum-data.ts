
export type Reply = {
    id: string;
    author: string;
    timestamp: string;
    body: string;
};

export type ForumThread = {
    id: string;
    title: string;
    body: string;
    author: string;
    timestamp: string;
    replies: Reply[];
};

export const forumThreads: ForumThread[] = [
    {
        id: 'thread-1',
        title: "How do you all deal with pre-exam anxiety?",
        body: "My finals are next week and I'm already feeling the pressure. I can't seem to focus on studying because my mind is just racing with 'what ifs'. Any tips that have worked for you?",
        author: "Student A",
        timestamp: "2 hours ago",
        replies: [
            {
                id: 'reply-1-1',
                author: "Student B",
                timestamp: "1 hour ago",
                body: "I feel this! One thing that helps me is the 4-7-8 breathing technique. It sounds simple but it forces my body to calm down. Also, I try to remind myself that my grade doesn't define my worth."
            },
            {
                id: 'reply-1-2',
                author: "Student C",
                timestamp: "30 minutes ago",
                body: "Making a very specific, hour-by-hour study plan helps me. It makes the mountain of work feel less intimidating when I just focus on the next small task."
            }
        ]
    },
    {
        id: 'thread-2',
        title: "Feeling lonely even when surrounded by people",
        body: "I have classmates and I'm in a few clubs, but I still feel incredibly lonely sometimes, like I don't have a real connection with anyone. Is this a normal part of the college experience?",
        author: "Student D",
        timestamp: "1 day ago",
        replies: [
             {
                id: 'reply-2-1',
                author: "Student E",
                timestamp: "20 hours ago",
                body: "It's so normal. I think a lot of us feel this way. It's hard to go from deep high school friendships to more surface-level college ones. You're not alone in feeling this."
            }
        ]
    },
    {
        id: 'thread-3',
        title: "How to stop procrastinating on a huge paper?",
        body: "I have a 15-page paper due in two weeks and I haven't even started. I just feel paralyzed every time I open the document. Any advice?",
        author: "Student F",
        timestamp: "3 days ago",
        replies: []
    }
];
