import { FileText, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Produkty",
      links: [
        "Szablony dokumentów",
        "Generator AI",
        "Biblioteka polityk",
        "Checklisty compliance"
      ]
    },
    {
      title: "Standardy",
      links: [
        "ISO 27001",
        "RODO/GDPR", 
        "NIS2",
        "CIS Controls",
        "KSC"
      ]
    },
    {
      title: "Wsparcie",
      links: [
        "Centrum pomocy",
        "Dokumentacja API",
        "Status serwisu",
        "Kontakt"
      ]
    },
    {
      title: "Firma",
      links: [
        "O nas",
        "Blog",
        "Kariera",
        "Polityka prywatności",
        "Regulamin"
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-t from-foreground/5 to-transparent py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">IT Docs Portal</span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Profesjonalne szablony dokumentów IT i narzędzia compliance 
              dla nowoczesnych organizacji. Bezpieczeństwo danych to nasza specjalność.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                kontakt@itdocsportal.pl
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                +48 800 123 456
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Warszawa, Polska
              </div>
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="lg:col-span-1">
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>© 2025 IT Docs Portal. Wszystkie prawa zastrzeżone.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="glass px-3 py-1 rounded-full">🇵🇱 Polskie prawo</span>
                <span className="glass px-3 py-1 rounded-full">🔒 RODO compliant</span>
                <span className="glass px-3 py-1 rounded-full">✅ ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;