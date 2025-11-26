import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-black/80 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          Michelle Angelique Lumanto
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="capitalize transition-colors hover:text-purple-400 text-purple-400"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="capitalize transition-colors hover:text-purple-400 text-white"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="capitalize transition-colors hover:text-purple-400 text-white"
          >
            Projects
          </Link>

          <Link
            href="/experience"
            className="capitalize transition-colors hover:text-purple-400 text-white"
          >
            Experience
          </Link>

          <Link
            href="/sertificate"
            className="capitalize transition-colors hover:text-purple-400 text-white"
          >
            Sertificate
          </Link>
          

          <Link
            href="/contact"
            className="capitalize transition-colors hover:text-purple-400 text-white"
          >
            Contact
          </Link>

          
        </div>
      </div>
    </nav>
  );
}