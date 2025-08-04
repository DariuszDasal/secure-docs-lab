import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TemplateCategories from "@/components/TemplateCategories";
import DocumentGenerator from "@/components/DocumentGenerator";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        
        <div id="templates">
          <TemplateCategories />
        </div>
        
        <div id="generator">
          <DocumentGenerator />
        </div>
        
        <div id="pricing">
          <Pricing />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
