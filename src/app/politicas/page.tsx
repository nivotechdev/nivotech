import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PoliticasPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Card className="bg-card/80 backdrop-blur-lg border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl md:text-3xl font-bold text-primary">
                Políticas de Privacidade e Termos
              </CardTitle>
              <Button asChild variant="ghost" size="icon">
                <Link href="/">
                  <ArrowLeft />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">1. Coleta de Informações</h2>
              <p className="leading-relaxed">
                Coletamos informações que você nos fornece diretamente ao entrar em contato para solicitar um orçamento, como nome, e-mail e telefone. Nenhuma informação é coletada automaticamente sem o seu consentimento.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">2. Uso das Informações</h2>
              <p className="leading-relaxed">
                As informações fornecidas são usadas exclusivamente para entrar em contato com você sobre sua solicitação de orçamento e para discutir possíveis projetos. Não compartilhamos suas informações com terceiros.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">3. Direitos Autorais</h2>
              <p className="leading-relaxed">
                Todo o conteúdo, design e código deste site são propriedade da NivoTech. A reprodução não autorizada é proibida.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">4. Contato</h2>
              <p className="leading-relaxed">
                Se tiver alguma dúvida sobre nossas políticas, entre em contato conosco através dos canais disponíveis no site.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
