import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, FileText, CheckCircle, Settings, Users, Database, Lock, Globe } from "lucide-react";
import securityIcon from "@/assets/security-icon.jpg";
import contractIcon from "@/assets/contract-icon.jpg";
import checklistIcon from "@/assets/checklist-icon.jpg";
import proceduresIcon from "@/assets/procedures-icon.jpg";

const templates = [
  {
    category: "Polityki Bezpieczeństwa",
    icon: Shield,
    image: securityIcon,
    count: "12 szablonów",
    description: "Kompletne polityki cyberbezpieczeństwa zgodne z najlepszymi praktykami",
    templates: [
      "Polityka Bezpieczeństwa Informacji",
      "Polityka Zarządzania Hasłami", 
      "Polityka Klasyfikacji Danych",
      "Polityka Kontroli Dostępu"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    category: "Wzory Umów",
    icon: FileText,
    image: contractIcon,
    count: "8 wzorów",
    description: "Profesjonalne wzory umów i porozumień IT gotowe do personalizacji",
    templates: [
      "Umowa Powierzenia Danych (RODO)",
      "Service Level Agreement (SLA)",
      "Umowa o Zachowaniu Poufności (NDA)",
      "Umowa Licencyjna Oprogramowania"
    ],
    color: "from-green-500 to-green-600"
  },
  {
    category: "Checklisty Zgodności",
    icon: CheckCircle,
    image: checklistIcon,
    count: "15 list kontrolnych",
    description: "Szczegółowe checklisty dla audytów i certyfikacji",
    templates: [
      "Checklist ISO 27001",
      "Audit RODO/GDPR",
      "Kontrole NIS2",
      "CIS Critical Security Controls"
    ],
    color: "from-purple-500 to-purple-600"
  },
  {
    category: "Procedury IT",
    icon: Settings,
    image: proceduresIcon,
    count: "10 procedur",
    description: "Gotowe procedury operacyjne dla działów IT",
    templates: [
      "Onboarding/Offboarding Pracowników",
      "Procedura Backup i Recovery",
      "Zarządzanie Incydentami",
      "Procedura Change Management"
    ],
    color: "from-orange-500 to-orange-600"
  }
];

const TemplateCategories = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Kategorie Szablonów
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profesjonalne dokumenty IT przygotowane przez ekspertów cyberbezpieczeństwa.
            Każdy szablon można personalizować i dostosować do potrzeb Twojej organizacji.
          </p>
        </div>

        {/* Template grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {templates.map((template, index) => (
            <Card 
              key={template.category}
              className="glass-strong p-8 rounded-3xl shadow-apple-strong hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                {/* Icon and image */}
                <div className="relative">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${template.color} p-4 shadow-apple`}>
                    <template.icon className="w-full h-full text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-xl overflow-hidden glass border-2 border-white">
                    <img 
                      src={template.image} 
                      alt={template.category}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{template.category}</h3>
                    <span className="text-sm font-medium text-primary glass px-3 py-1 rounded-full">
                      {template.count}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {template.description}
                  </p>

                  {/* Template list */}
                  <div className="space-y-2 mb-6">
                    {template.templates.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="glass" className="w-full">
                    Przeglądaj szablony
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional features */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              title: "Multi-user Access",
              description: "Zespołowy dostęp do dokumentów z kontrolą uprawnień"
            },
            {
              icon: Database,
              title: "Cloud Storage", 
              description: "Bezpieczne przechowywanie w chmurze z backup"
            },
            {
              icon: Globe,
              title: "Export Formats",
              description: "Eksport do PDF, Word, Excel i innych formatów"
            }
          ].map((feature, index) => (
            <div 
              key={feature.title}
              className="glass p-6 rounded-2xl text-center animate-slide-up"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateCategories;