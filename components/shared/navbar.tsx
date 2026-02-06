"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageSelector } from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, Download } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Navbar() {
  const { t } = useLanguage();
  
  const navLinks = [
    { name: t("navbar.about"), href: "/" },
    { name: t("navbar.projects"), href: "/projects" },
    { name: t("navbar.contact"), href: "/contact" }, 
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
           {/* Language Selector */}
           <div className="hidden md:block">
              <LanguageSelector />
           </div>
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
                 
                 {/* Footer with Language Selector */}
                 <div className="mt-auto p-4 border-t border-border/40">
                   <div className="flex items-center justify-between">
                     <span className="text-sm text-muted-foreground">{t("navbar.about").includes("About") ? "Language" : t("navbar.about").includes("自己") ? "言語" : "Ngôn ngữ"}</span>
                     <LanguageSelector />
                   </div>
                 </div>
               </div>
             </SheetContent>
           </Sheet>
        </div>
      </div>
    </header>
  );
}