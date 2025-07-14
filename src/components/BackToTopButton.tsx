
'use client';

import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Button
        onClick={scrollToTop}
        className={cn(
          'fixed bottom-10 right-10 h-11 w-11 rounded-full shadow-lg transition-all duration-300 hover:scale-110',
          'z-50',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
        variant="default"
        size="icon"
        aria-label="Back to top"
      >
        <ChevronUp className="h-6 w-6" />
      </Button>
  );
}
