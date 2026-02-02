import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "#contact" }, // Tạm thời dùng anchor link
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        {/* Logo bên trái */}
        <div className="flex items-center gap-2">
           <Link href="/" className="font-bold text-xl tracking-tight">
            <span className="text-primary">&lt;</span>
            DevPortfolio
            <span className="text-primary">/&gt;</span>
          </Link>
        </div>

        {/* Menu giữa (ẩn trên mobile, hiện trên desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Nút bên phải */}
        <div className="flex items-center gap-2">
           {/* Nút Download CV (chỉ hiện trên desktop để tiết kiệm chỗ trên mobile) */}
           <Link href="/resume.pdf" target="_blank" className="hidden md:block">
              <Button variant="ghost" size="sm">CV</Button>
           </Link>
           <ModeToggle />
        </div>
      </div>
    </header>
  );
}