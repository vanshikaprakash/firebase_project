import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider';
import { PT_Sans } from 'next/font/google';
import { AuthProvider } from '@/contexts/AuthContext';
import BackToTopButton from '@/components/BackToTopButton';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: 'MindBloom',
  description: 'A web-based mental health app for college students to process emotions and receive small, actionable steps.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background antialiased flex flex-col', ptSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            {children}
            <Toaster />
            <BackToTopButton />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
