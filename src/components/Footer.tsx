
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t pb-28 md:pb-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24">
        <p className="text-center md:text-left text-sm text-muted-foreground order-2 md:order-1">
          Made with ❤️ by{' '}
          <a
            href="https://www.linkedin.com/in/vanshikaprakash/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground hover:text-primary underline"
          >
            Vanshika
          </a>
        </p>
        <nav className="flex gap-4 sm:gap-6 text-sm text-muted-foreground order-1 md:order-2">
            <Link href="/about" className="transition-colors hover:text-foreground">About</Link>
            <Link href="/resources" className="transition-colors hover:text-foreground">Resources</Link>
            <Link href="/community" className="transition-colors hover:text-foreground">Community</Link>
            <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
        </nav>
      </div>
    </footer>
  )
}
