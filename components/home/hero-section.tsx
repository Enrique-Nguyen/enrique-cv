"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ArrowRight, Download, MapPin, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative container mx-auto flex flex-col md:flex-row items-center justify-center py-12 md:py-16 lg:py-20 gap-10 md:gap-12 lg:gap-20 overflow-hidden px-4 md:px-8">
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-xl space-y-6 md:space-y-8 text-center md:text-left">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 animate-fade-in">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium rounded-full">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {t("hero.availableForWork")}
            </Badge>
          </div>
          
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            {t("hero.greeting")}
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-linear-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              {t("hero.name")}
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold">
            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Full-stack Developer
            </span>
          </h2>

          <div className="flex items-center gap-2 justify-center md:justify-start text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{t("hero.location")}</span>
          </div>
        </div>

        <p className="text-muted-foreground max-w-xl md:text-lg leading-relaxed mx-auto md:mx-0">
          {t("hero.description")}
          <span className="text-foreground font-medium">{t("hero.descriptionHighlight")}</span>
          {t("hero.descriptionEnd")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto group shadow-lg hover:shadow-primary/25 transition-all duration-300">
              {t("hero.contactNow")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/resume.pdf" target="_blank">
            <Button size="lg" variant="outline" className="w-full sm:w-auto group hover:bg-primary/5 transition-all duration-300">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              {t("hero.downloadCV")}
            </Button>
          </Link>
        </div>

        <div className="flex gap-3 justify-center md:justify-start pt-2">
          <Link 
            href="https://github.com/Enrique-Nguyen" 
            target="_blank" 
            className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/ph%C3%BA-nguy%C3%AAn-nguy%E1%BB%85n-b47803285/" 
            target="_blank" 
            className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:bg-[#0077B5] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link 
            href="mailto:nguyenphunguyen2005@gmail.com" 
            className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="shrink-0 flex justify-center">
        <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 group">
          <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-primary/20 to-transparent rounded-full blur-3xl scale-110 animate-pulse" />
          
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" style={{ animationDuration: '20s' }} />
          
          <div className="relative w-full h-full rounded-full border-4 border-background shadow-2xl overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-500">
            <Image
              src="/images/avatar.jpg" 
              alt="Portrait"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>

          <div className="absolute -right-2 top-8 bg-background border shadow-lg rounded-full px-3 py-1.5 text-sm font-medium animate-bounce" style={{ animationDuration: '3s' }}>
            🚀 Dev
          </div>
          <div className="absolute -left-2 bottom-16 bg-background border shadow-lg rounded-full px-3 py-1.5 text-sm font-medium animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
            💻 Coder
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator - Hidden on mobile to prevent overlap with avatar */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-fade-in">
        <span className="text-xs text-muted-foreground font-medium">{t("hero.scrollDown")}</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-scroll-down" />
        </div>
        <ChevronDown className="h-4 w-4 text-muted-foreground animate-bounce" style={{ animationDuration: '2s' }} />
      </div>
    </section>
  );
}