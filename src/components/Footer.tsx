
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <nav className="flex gap-4 sm:gap-6 text-sm text-muted-foreground">
            <Link href="/about" className="transition-colors hover:text-foreground">About</Link>
            <Link href="/resources" className="transition-colors hover:text-foreground">Resources</Link>
            <Link href="/community" className="transition-colors hover:text-foreground">Community</Link>
            <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
        </nav>
        <p className="text-center text-sm leading-loose text-muted-foreground">
          Made with ❤️ by Vanshika
        </p>
      </div>
    </footer>
  )
}
