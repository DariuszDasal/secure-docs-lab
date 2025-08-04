import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Zap, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "19",
    period: "zł/miesiąc",
    description: "Idealny dla małych firm i freelancerów",
    features: [
      "5 dokumentów miesięcznie",
      "Podstawowe szablony",
      "Eksport PDF",
      "Email support",
      "Podstawowa personalizacja"
    ],
    buttonText: "Rozpocznij trial",
    variant: "outline" as const,
    popular: false
  },
  {
    name: "Professional",
    price: "29",
    period: "zł/miesiąc", 
    description: "Najlepszy wybór dla większości firm",
    features: [
      "Nielimitowane dokumenty",
      "Wszystkie szablony",
      "Wszystkie formaty eksportu",
      "AI-powered generator",
      "Priority support",
      "Zespołowe współdzielenie",
      "Custom branding",
      "Analityka użytkowania"
    ],
    buttonText: "Rozpocznij Professional",
    variant: "hero" as const,
    popular: true
  },
  {
    name: "Enterprise", 
    price: "99",
    period: "zł/miesiąc",
    description: "Dla dużych organizacji z wymaganiami compliance",
    features: [
      "Wszystko z Professional",
      "Niestandardowe szablony",
      "API access",
      "SSO integration",
      "Dedicated account manager",
      "On-premise deployment",
      "Advanced analytics",
      "SLA guarantee",
      "White-label solution"
    ],
    buttonText: "Skontaktuj się",
    variant: "premium" as const,
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-2xl mb-6">
            <Crown className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Przejrzyste ceny</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Wybierz Swój Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bez ukrytych opłat. Anuluj w dowolnym momencie. 14-dniowy okres próbny dla wszystkich planów.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`
                relative p-8 rounded-3xl shadow-apple-strong transition-all duration-500 hover:scale-105 animate-slide-up border-0
                ${plan.popular 
                  ? 'glass-strong ring-2 ring-primary/20 shadow-glow' 
                  : 'glass'
                }
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-6 py-2 rounded-full text-sm font-medium shadow-apple">
                    <Star className="w-4 h-4 inline mr-1" />
                    Najpopularniejszy
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-3">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features list */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <Button 
                variant={plan.variant} 
                size="lg" 
                className="w-full"
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional features */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Instant Setup",
              description: "Zacznij korzystać w mniej niż 2 minuty. Bez skomplikowanych konfiguracji."
            },
            {
              icon: Check,
              title: "100% Compliance",
              description: "Wszystkie dokumenty zgodne z aktualnymi przepisami i standardami."
            },
            {
              icon: Crown,
              title: "Premium Support",
              description: "Dedykowane wsparcie od ekspertów cyberbezpieczeństwa."
            }
          ].map((feature, index) => (
            <div 
              key={feature.title}
              className="glass p-6 rounded-2xl text-center animate-slide-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ note */}
        <div className="text-center mt-16">
          <div className="glass p-6 rounded-2xl max-w-2xl mx-auto">
            <h4 className="font-semibold mb-2">Masz pytania?</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Skontaktuj się z naszym zespołem, aby dowiedzieć się więcej o naszych planach 
              i możliwościach dostosowania do Twoich potrzeb.
            </p>
            <Button variant="glass" size="sm">
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;