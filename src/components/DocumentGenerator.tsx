import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Wand2, Download, Eye, Settings2 } from "lucide-react";

const DocumentGenerator = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    responsiblePerson: "",
    documentType: "",
    industry: "",
    employeeCount: "",
    specialRequirements: ""
  });

  const documentTypes = [
    { value: "security-policy", label: "Polityka Bezpieczeństwa Informacji" },
    { value: "password-policy", label: "Polityka Zarządzania Hasłami" },
    { value: "data-classification", label: "Polityka Klasyfikacji Danych" },
    { value: "access-control", label: "Polityka Kontroli Dostępu" },
    { value: "gdpr-agreement", label: "Umowa Powierzenia Danych (RODO)" },
    { value: "sla-agreement", label: "Service Level Agreement" },
    { value: "nda-agreement", label: "Umowa o Zachowaniu Poufności" }
  ];

  const industries = [
    { value: "finance", label: "Finanse i Bankowość" },
    { value: "healthcare", label: "Ochrona Zdrowia" },
    { value: "education", label: "Edukacja" },
    { value: "government", label: "Sektor Publiczny" },
    { value: "manufacturing", label: "Produkcja" },
    { value: "technology", label: "Technologie IT" },
    { value: "retail", label: "Handel Detaliczny" },
    { value: "other", label: "Inne" }
  ];

  const employeeCounts = [
    { value: "1-10", label: "1-10 pracowników" },
    { value: "11-50", label: "11-50 pracowników" },
    { value: "51-250", label: "51-250 pracowników" },
    { value: "251-1000", label: "251-1000 pracowników" },
    { value: "1000+", label: "Ponad 1000 pracowników" }
  ];

  const handleGenerate = () => {
    // Tu będzie logika generowania dokumentu
    console.log("Generating document with data:", formData);
  };

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-2xl mb-6">
            <Wand2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">AI-Powered Generator</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Interaktywny Generator Dokumentów
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stwórz spersonalizowane dokumenty IT w kilka minut. Nasze AI automatycznie dostosuje 
            szablon do specyfiki Twojej organizacji i branży.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Generator form */}
          <Card className="glass-strong p-8 rounded-3xl shadow-apple-strong border-0">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Settings2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Konfiguracja Dokumentu</h3>
            </div>

            <div className="space-y-6">
              {/* Company details */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyName">Nazwa firmy *</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    placeholder="np. TechCorp Sp. z o.o."
                    className="mt-2 glass border-0 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                
                <div>
                  <Label htmlFor="responsiblePerson">Osoba odpowiedzialna *</Label>
                  <Input
                    id="responsiblePerson"
                    value={formData.responsiblePerson}
                    onChange={(e) => setFormData({...formData, responsiblePerson: e.target.value})}
                    placeholder="np. Jan Kowalski"
                    className="mt-2 glass border-0 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Document type */}
              <div>
                <Label>Typ dokumentu *</Label>
                <Select value={formData.documentType} onValueChange={(value) => setFormData({...formData, documentType: value})}>
                  <SelectTrigger className="mt-2 glass border-0 focus:ring-2 focus:ring-primary/20">
                    <SelectValue placeholder="Wybierz typ dokumentu" />
                  </SelectTrigger>
                  <SelectContent className="glass-strong border-0">
                    {documentTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Industry and size */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label>Branża</Label>
                  <Select value={formData.industry} onValueChange={(value) => setFormData({...formData, industry: value})}>
                    <SelectTrigger className="mt-2 glass border-0 focus:ring-2 focus:ring-primary/20">
                      <SelectValue placeholder="Wybierz branżę" />
                    </SelectTrigger>
                    <SelectContent className="glass-strong border-0">
                      {industries.map((industry) => (
                        <SelectItem key={industry.value} value={industry.value}>
                          {industry.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label>Wielkość firmy</Label>
                  <Select value={formData.employeeCount} onValueChange={(value) => setFormData({...formData, employeeCount: value})}>
                    <SelectTrigger className="mt-2 glass border-0 focus:ring-2 focus:ring-primary/20">
                      <SelectValue placeholder="Liczba pracowników" />
                    </SelectTrigger>
                    <SelectContent className="glass-strong border-0">
                      {employeeCounts.map((count) => (
                        <SelectItem key={count.value} value={count.value}>
                          {count.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Special requirements */}
              <div>
                <Label htmlFor="specialRequirements">Specjalne wymagania (opcjonalne)</Label>
                <Textarea
                  id="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={(e) => setFormData({...formData, specialRequirements: e.target.value})}
                  placeholder="Opisz dodatkowe wymagania, specyfikę branży lub inne uwagi..."
                  className="mt-2 glass border-0 focus:ring-2 focus:ring-primary/20 min-h-[100px]"
                />
              </div>

              {/* Generate button */}
              <Button 
                onClick={handleGenerate}
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={!formData.companyName || !formData.responsiblePerson || !formData.documentType}
              >
                <Wand2 className="mr-2" />
                Generuj Dokument
              </Button>
            </div>
          </Card>

          {/* Preview/Results */}
          <Card className="glass-strong p-8 rounded-3xl shadow-apple-strong border-0">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Podgląd i Eksport</h3>
            </div>

            <div className="space-y-6">
              {/* Mock preview */}
              <div className="glass p-6 rounded-2xl min-h-[300px] border border-dashed border-primary/20">
                <div className="text-center text-muted-foreground">
                  <div className="w-16 h-16 mx-auto mb-4 glass-subtle rounded-2xl flex items-center justify-center">
                    <Eye className="w-8 h-8" />
                  </div>
                  <p className="text-lg font-medium mb-2">Podgląd dokumentu</p>
                  <p className="text-sm">
                    Wypełnij formularz po lewej stronie, aby zobaczyć podgląd 
                    spersonalizowanego dokumentu
                  </p>
                </div>
              </div>

              {/* Export options */}
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Opcje eksportu:</h4>
                
                <Button variant="outline" className="w-full justify-start" disabled>
                  <Download className="mr-2 w-4 h-4" />
                  Pobierz jako PDF
                </Button>
                
                <Button variant="outline" className="w-full justify-start" disabled>
                  <Download className="mr-2 w-4 h-4" />
                  Pobierz jako Word (.docx)
                </Button>
                
                <Button variant="outline" className="w-full justify-start" disabled>
                  <Download className="mr-2 w-4 h-4" />
                  Pobierz jako markdown
                </Button>
              </div>

              {/* Features */}
              <div className="glass p-4 rounded-xl">
                <h5 className="font-medium mb-3">✨ Funkcje Premium:</h5>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Nielimitowane generowanie</li>
                  <li>• Wszystkie formaty eksportu</li>
                  <li>• AI-powered personalizacja</li>
                  <li>• Zespołowe współdzielenie</li>
                  <li>• Priority support</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DocumentGenerator;