"use client";

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Zap, Shield, TrendingUp } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { InstagramIcon } from '../icons/instagram-icon';
import { WhatsAppIcon } from '../icons/whatsapp-icon';
import { usePathname } from 'next/navigation';

const NivoTechLogo = () => (
    <Image 
      src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/Imagens/logonivofundoroxo.png"
      alt="NivoTech Logo"
      width={48}
      height={48}
      className="rounded-md"
      priority
    />
);

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
    {children}
  </Link>
);

const mobileMenuVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const DescriptiveMobileNavLink = ({ 
  href, 
  title, 
  description, 
  onNavigate, 
  isActive 
}: { 
  href: string; 
  title: string; 
  description: string; 
  onNavigate: () => void; 
  isActive: boolean;
}) => (
  <motion.div variants={mobileLinkVariants}>
    <SheetClose asChild>
      <Link
        href={href}
        onClick={onNavigate}
        className={cn(
          "block text-left transition-all duration-400 ease-in-out border-l-[3px]",
          isActive
            ? "border-primary pl-[27px] text-primary"
            : "border-transparent pl-[30px] text-foreground hover:text-primary"
        )}
      >
        <span className={cn("text-lg", isActive ? "font-semibold" : "font-medium")}>{title}</span>
        <p className="text-[11px]" style={{ color: '#86868b' }}>{description}</p>
      </Link>
    </SheetClose>
  </motion.div>
);

const socialLinks = [
  { href: "https://www.instagram.com/nivo.tech/", icon: InstagramIcon, label: "Instagram" },
  { href: "https://wa.me/5554994731661?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento%20para%20um%20site%20com%20a%20NivoTech.", icon: WhatsAppIcon, label: "WhatsApp" },
  { href: "https://www.linkedin.com", icon: Linkedin, label: "LinkedIn" },
];

const credibilityBadges = [
  { icon: Zap, text: "Alta Performance" },
  { icon: Shield, text: "Segurança Ativa" },
  { icon: TrendingUp, text: "Foco em ROI" },
];

const mobileNavLinks = [
    { href: "/#hero", title: "Home", description: "Início da jornada NivoTech.", sectionId: "hero" },
    { href: "/#solucao", title: "Engenharia de Conversão", description: "Nossa metodologia exclusiva.", sectionId: "solucao" },
    { href: "/#cases", title: "Cases de Sucesso", description: "Portfólio de Landing Pages de elite.", sectionId: "cases" },
    { href: "/#faq", title: "FAQ", description: "Perguntas frequentes.", sectionId: "faq" },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = mobileNavLinks.map(link => link.sectionId).filter(Boolean);
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition < windowHeight / 2) {
        if (activeSection !== 'hero') setActiveSection('hero');
        return;
      }

      let newActiveSection = activeSection;
      for (const id of sectionIds.slice().reverse()) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2) {
            newActiveSection = id;
            break;
          }
        }
      }
      
      if (activeSection !== newActiveSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);


  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "top-4" : "top-0"
      )}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className={cn(
            "flex items-center justify-between w-full rounded-full transition-all duration-300",
            isScrolled 
              ? "h-[64px] px-6 bg-card/80 backdrop-blur-xl border border-primary/10 shadow-lg shadow-primary/5"
              : "h-[80px] px-0"
          )}
        >
          <Link href="/" aria-label="NivoTech Home" className="flex items-center gap-3">
            <NivoTechLogo />
            <span className="font-headline text-xl font-bold tracking-tight text-foreground">
              NivoTech
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/#solucao">Solução</NavLink>
            <NavLink href="/#cases">Cases</NavLink>
            <NavLink href="/#faq">FAQ</NavLink>
          </nav>
          
          <div className="hidden md:block">
            <Button asChild variant="outline" className="rounded-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="#contact">Contato</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground" aria-label="Abrir menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="p-0 w-[60vw] max-w-xs sm:max-w-sm bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.05)]"
              >
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
                  <SheetDescription className="sr-only">
                    Navegue pelas seções do site ou entre em contato.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <motion.div 
                    variants={mobileMenuVariants}
                    initial="hidden"
                    animate={isMobileMenuOpen ? "visible" : "hidden"}
                    className="flex flex-col flex-grow pt-10"
                  >
                    <div className="px-8 pb-4 flex items-center justify-between">
                         <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Navegação</h3>
                         <SheetClose asChild>
                            <Button variant="ghost" size="icon" className="h-9 w-9 text-primary" aria-label="Fechar menu">
                                <X className="h-5 w-5" />
                            </Button>
                        </SheetClose>
                    </div>

                    <nav className="space-y-6 mt-6">
                      {mobileNavLinks.map(link => (
                        <DescriptiveMobileNavLink
                            key={link.href}
                            href={link.href}
                            title={link.title}
                            description={link.description}
                            isActive={activeSection === link.sectionId}
                            onNavigate={() => setIsMobileMenuOpen(false)}
                        />
                      ))}
                    </nav>

                    <div className="flex-grow" />
                    
                    <div className="px-8 mt-8">
                      <motion.div variants={mobileLinkVariants}>
                        <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Contato</h3>
                        <SheetClose asChild>
                            <Link 
                              href="#contact" 
                              onClick={() => setIsMobileMenuOpen(false)} 
                              className="block w-full text-center p-3 rounded-xl bg-secondary text-primary font-semibold transition-colors hover:bg-primary/20"
                            >
                              Solicitar Orçamento
                            </Link>
                        </SheetClose>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
                    transition={{ delay: isMobileMenuOpen ? 0.6 : 0 }}
                    className="px-8 pb-8 mt-8 text-center"
                  >
                    <div className="flex justify-center space-x-6 mb-6">
                      {socialLinks.map(link => (
                        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-primary hover:text-accent transition-colors">
                          <link.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>

                     <div className="space-y-2">
                        {credibilityBadges.map((badge) => (
                            <div key={badge.text} className="flex items-center justify-center gap-2 text-xs text-muted-foreground/80">
                                <badge.icon className="w-3.5 h-3.5 text-primary/70" />
                                <span>{badge.text}</span>
                            </div>
                        ))}
                    </div>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
