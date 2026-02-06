"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Phone, 
  MapPin, 
  Send,
  MessageCircle,
  ExternalLink,
  Copy,
  Facebook
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function ContactPage() {
  const { t, language } = useLanguage();

  const contactChannels = [
    {
      name: t("contactChannels.email.name"),
      description: t("contactChannels.email.description"),
      value: "nguyenphunguyen2005@gmail.com",
      href: "mailto:nguyenphunguyen2005@gmail.com",
      icon: Mail,
      color: "hover:bg-red-500 hover:border-red-500",
      iconColor: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      name: t("contactChannels.linkedin.name"),
      description: t("contactChannels.linkedin.description"),
      value: "linkedin.com/in/phú-nguyễn-nguyễn-b47803285",
      href: "https://www.linkedin.com/in/ph%C3%BA-nguy%C3%AAn-nguy%E1%BB%85n-b47803285/",
      icon: Linkedin,
      color: "hover:bg-[#0077B5] hover:border-[#0077B5]",
      iconColor: "text-[#0077B5]",
      bgColor: "bg-[#0077B5]/10",
    },
    {
      name: t("contactChannels.github.name"),
      description: t("contactChannels.github.description"),
      value: "github.com/Enrique-Nguyen",
      href: "https://github.com/Enrique-Nguyen",
      icon: Github,
      color: "hover:bg-gray-800 hover:border-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-700",
      iconColor: "text-gray-800 dark:text-white",
      bgColor: "bg-gray-800/10 dark:bg-white/10",
    },
    {
      name: t("contactChannels.zalo.name"),
      description: t("contactChannels.zalo.description"),
      value: "0364 779 789",
      href: "https://zalo.me/0364779789",
      icon: MessageCircle,
      color: "hover:bg-[#0084FF] hover:border-[#0084FF]",
      iconColor: "text-[#0084FF]",
      bgColor: "bg-[#0084FF]/10",
    },
    {
      name: t("contactChannels.phone.name"),
      description: t("contactChannels.phone.description"),
      value: "+84 397 970 205",
      href: "tel:+84397970205",
      icon: Phone,
      color: "hover:bg-green-500 hover:border-green-500",
      iconColor: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      name: t("contactChannels.facebook.name"),
      description: t("contactChannels.facebook.description"),
      value: "Phú Nguyên",
      href: "https://www.facebook.com/phu.nguyen.402833/",
      icon: Facebook,
      color: "hover:bg-[#0077B5] hover:border-[#0077B5]",
      iconColor: "text-[#0077B5]",
      bgColor: "bg-[#0077B5]/10",
    },
  ];
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 lg:py-32">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium rounded-full">
            <Send className="h-3 w-3 mr-2" />
            {t("contact.badge")}
          </Badge>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {t("contact.title")}
          </h1>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("contact.description")}
          </p>
        </div>

        {/* Location info */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-12">
          <MapPin className="h-4 w-4" />
          <span>{t("contact.location")}</span>
        </div>

        {/* Contact Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {contactChannels.map((channel) => (
            <ContactCard key={channel.name} channel={channel} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto mt-16 md:mt-20 text-center">
          <Card className="border-dashed border-2 bg-muted/30">
            <CardContent className="py-8 md:py-10">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t("contact.emailPreferred")}</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {t("contact.emailDescription")}
                </p>
                <Link href="mailto:nguyenphunguyen2005@gmail.com">
                  <Button size="lg" className="mt-2 group">
                    <Mail className="mr-2 h-4 w-4" />
                    {t("contact.sendEmail")}
                    <ExternalLink className="ml-2 h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Response time note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          {t("contact.responseTime")}
        </p>
      </section>
    </div>
  );
}

// Component hiển thị từng kênh liên hệ
interface ContactChannel {
  name: string;
  description: string;
  value: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  iconColor: string;
  bgColor: string;
}

function ContactCard({ channel }: { channel: ContactChannel }) {
  const { t } = useLanguage();
  const Icon = channel.icon;
  
  return (
    <Link href={channel.href} target="_blank">
      <Card className={`group cursor-pointer border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${channel.color} hover:text-white`}>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className={`shrink-0 p-3 rounded-xl ${channel.bgColor} group-hover:bg-white/20 transition-colors`}>
              <Icon className={`h-6 w-6 ${channel.iconColor} group-hover:text-white transition-colors`} />
            </div>
            <div className="space-y-1 min-w-0">
              <h3 className="font-semibold text-lg">{channel.name}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">
                {channel.description}
              </p>
              <p className="text-sm font-medium truncate pt-1 group-hover:text-white/90 transition-colors">
                {channel.value}
              </p>
            </div>
          </div>
          
          {/* Hover indicator */}
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-white/80 transition-colors">
            <ExternalLink className="h-4 w-4" />
            <span>{t("contact.openLink")}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
