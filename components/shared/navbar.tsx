"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" }, 
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        {/* Logo bên trái */}
        <div className="flex items-center gap-2">
           <Link href="/" className="font-bold text-xl tracking-tight">
            <span className="text-primary">&lt;</span>
            Enrique
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
           
           {/* Mobile Menu */}
           <Sheet>
             <SheetTrigger asChild className="md:hidden">
               <Button variant="ghost" size="icon">
                 <Menu className="h-5 w-5" />
                 <span className="sr-only">Toggle menu</span>
               </Button>
             </SheetTrigger>
             <SheetContent side="right" className="w-72 p-0">
               <div className="flex flex-col h-full">
                 {/* Header */}
                 <div className="flex items-center justify-between p-4 border-b border-border/40">
                   <Link href="/" className="font-bold text-lg tracking-tight">
                     <span className="text-primary">&lt;</span>
                     Enrique
                     <span className="text-primary">/&gt;</span>
                   </Link>
                 </div>
                 
                 {/* Navigation Links */}
                 <nav className="flex flex-col p-4 gap-1">
                   {navLinks.map((link) => (
                     <SheetClose asChild key={link.name}>
                       <Link
                         href={link.href}
                         className="flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors hover:bg-muted hover:text-primary"
                       >
                         {link.name}
                       </Link>
                     </SheetClose>
                   ))}
                 </nav>
                 
                 {/* Footer with CV Download */}
                 <div className="mt-auto p-4 border-t border-border/40">
                   <SheetClose asChild>
                     <Link href="/resume.pdf" target="_blank">
                       <Button variant="default" className="w-full gap-2">
                         <Download className="h-4 w-4" />
                         Tải xuống CV
                       </Button>
                     </Link>
                   </SheetClose>
                 </div>
               </div>
             </SheetContent>
           </Sheet>
        </div>
      </div>
    </header>
  );
}