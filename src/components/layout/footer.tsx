"use client";

import Link from 'next/link';
import { InstagramIcon } from '../icons/instagram-icon';
import { Linkedin } from 'lucide-react';
import { WhatsAppIcon } from '../icons/whatsapp-icon';

const NivoTechLogo = () => (
    <div className="font-headline text-2xl font-extrabold tracking-tight text-foreground">
        NivoTech
    </div>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
        {children}
    </Link>
);

const FooterColumn = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="space-y-4">
        <h3 className="text-xs font-extrabold uppercase text-primary tracking-wider">{title}</h3>
        <div className="flex flex-col space-y-2 text-sm">
            {children}
        </div>
    </div>
);

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/10">
        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
                {/* Coluna 1: Identidade */}
                <div className="space-y-4 flex flex-col items-center md:items-start">
                    <NivoTechLogo />
                    <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                        Engenharia visual e performance digital de alta escala.
                    </p>
                    <div className="flex space-x-4 pt-2">
                        <a href="https://www.instagram.com/nivo.tech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <InstagramIcon className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
                        </a>
                        <a href="https://wa.me/5554994731661?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento%20para%20um%20site%20com%20a%20NivoTech." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <WhatsAppIcon className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Coluna 2: Navegação */}
                <FooterColumn title="Sistema">
                    <FooterLink href="/">Home</FooterLink>
                    <FooterLink href="/#process">Processo</FooterLink>
                    <FooterLink href="/#features">Diferenciais</FooterLink>
                    <FooterLink href="#">Portfólio</FooterLink>
                </FooterColumn>

                {/* Coluna 3: Contato */}
                <FooterColumn title="Contato">
                    <FooterLink href="mailto:nivotech.contato@gmail.com">nivotech.contato@gmail.com</FooterLink>
                    <FooterLink href="https://wa.me/5554994731661?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento%20para%20um%20site%20com%20a%20NivoTech.">WhatsApp</FooterLink>
                    <p className="text-sm text-muted-foreground">Atendimento 24h / 7 dias</p>
                </FooterColumn>

                {/* Coluna 4: Legal */}
                <FooterColumn title="Compliance">
                    <FooterLink href="/politicas">Termos de Uso</FooterLink>
                    <FooterLink href="/politicas">Políticas de Privacidade</FooterLink>
                    <FooterLink href="/politicas">LGPD</FooterLink>
                </FooterColumn>
            </div>

            {/* Copyright Bar */}
            <div className="mt-16 pt-8 border-t border-border text-xs text-muted-foreground">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                    <p>© 2026 NIVOTECH. TODOS OS DIREITOS RESERVADOS. | CNPJ: XX.XXX.XXX/0001-XX | Caxias do Sul/RS.</p>
                    <p className="font-code text-primary/70 text-xs uppercase tracking-widest">High Performance Certified</p>
                </div>
            </div>
        </div>
    </footer>
  );
}
