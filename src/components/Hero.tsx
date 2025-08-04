import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FileText, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 hero-bg opacity-90"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 glass rounded-3xl animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-16 h-16 glass-subtle rounded-2xl animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 glass rounded-xl animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Hero heading */}
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-lato">
            <span className="text-gradient">IT Docs</span>
            <br />
            <span className="text-foreground">Portal</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Profesjonalne szablony dokumentów IT, polityki bezpieczeństwa i interaktywny generator 
            zgodny z ISO 27001, RODO i NIS2
          </p>
        </div>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-2 glass px-6 py-3 rounded-2xl">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Polityki Bezpieczeństwa</span>
          </div>
          <div className="flex items-center gap-2 glass px-6 py-3 rounded-2xl">
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Wzory Umów</span>
          </div>
          <div className="flex items-center gap-2 glass px-6 py-3 rounded-2xl">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Checklisty ISO 27001</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="hero" size="xl" className="group">
            Rozpocznij 14-dniowy trial
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="glass" size="xl">
            Zobacz szablony
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm text-muted-foreground mb-4">
            Zgodne ze standardami:
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-xs font-medium text-muted-foreground">
            <span className="glass px-4 py-2 rounded-lg">ISO 27001</span>
            <span className="glass px-4 py-2 rounded-lg">RODO/GDPR</span>
            <span className="glass px-4 py-2 rounded-lg">NIS2</span>
            <span className="glass px-4 py-2 rounded-lg">CIS Controls</span>
            <span className="glass px-4 py-2 rounded-lg">KSC</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;