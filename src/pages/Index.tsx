import { Button } from "@/components/ui/button";
import { CosmicParticles } from "@/components/CosmicParticles";
import { TesseractCube } from "@/components/TesseractCube";
import { Zap } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [easterEggGlow, setEasterEggGlow] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-cosmic overflow-hidden relative font-body">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 cosmic-grid opacity-30" />
      
      {/* Floating Particles */}
      <CosmicParticles />
      
      {/* Rotating Tesseract Cube */}
      <TesseractCube />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Header - 3D Title */}
        <div className="text-center mb-8 animate-fade-in-scale opacity-0" style={{ animationDelay: '0.3s' }}>
          <h1 className="font-display text-6xl md:text-8xl font-black text-foreground text-3d-metallic text-glow-blue animate-pulse-glow mb-4 tracking-wider">
            TESSERACT
          </h1>
          <div className="font-display text-4xl md:text-6xl font-bold text-primary-glow tracking-widest">
            2025
          </div>
        </div>
        
        {/* Subtitle */}
        <p className="font-body text-xl md:text-2xl text-center text-foreground/90 max-w-3xl mb-16 animate-fade-in opacity-0 font-light tracking-wide" 
          style={{ animationDelay: '0.8s' }}>
          Unlock the Power of Innovation – Vote for the Brightest Minds!
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-20 animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
          <Button 
            variant="energy" 
            size="xl"
            className="font-display uppercase"
            onClick={() => console.log('Participant Entry')}
          >
            Enter as Participant
          </Button>
          
          <Button 
            variant="warning" 
            size="xl"
            className="font-display uppercase"
            onClick={() => console.log('Admin Access')}
          >
            Access Admin Console
          </Button>
        </div>
        
        {/* Footer with Easter Egg */}
        <footer className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0" style={{ animationDelay: '1.6s' }}>
          <div 
            className="flex items-center gap-2 text-muted-foreground text-sm transition-all duration-300 cursor-pointer group"
            onMouseEnter={() => setEasterEggGlow(true)}
            onMouseLeave={() => setEasterEggGlow(false)}
          >
            <span className="font-body tracking-wider">Powered by Innovation</span>
            <Zap 
              className={`w-4 h-4 transition-all duration-300 ${
                easterEggGlow 
                  ? 'text-primary-glow animate-pulse-glow scale-125' 
                  : 'text-muted-foreground/50'
              }`}
              style={easterEggGlow ? { 
                filter: 'drop-shadow(0 0 10px hsl(200 100% 65% / 0.8))' 
              } : {}}
            />
          </div>
        </footer>
      </div>
      
      {/* Vignette overlay for depth */}
      <div className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, hsl(220 40% 5% / 0.6) 100%)'
        }} 
      />
    </div>
  );
};

export default Index;
