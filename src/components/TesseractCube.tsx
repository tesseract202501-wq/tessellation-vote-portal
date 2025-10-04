export const TesseractCube = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div className="relative w-64 h-64 animate-rotate-slow">
        {/* Outer cube */}
        <div className="absolute inset-0 border-2 border-primary/30 rounded-lg transform rotate-12" 
          style={{ 
            boxShadow: '0 0 40px hsl(210 100% 55% / 0.3)',
            animation: 'pulse-glow 3s ease-in-out infinite'
          }} 
        />
        
        {/* Inner cube */}
        <div className="absolute inset-8 border-2 border-primary-glow/50 rounded-lg transform -rotate-12" 
          style={{ 
            boxShadow: '0 0 30px hsl(200 100% 65% / 0.4)',
            animation: 'pulse-glow 3s ease-in-out infinite 0.5s'
          }} 
        />
        
        {/* Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-lg animate-pulse-glow"
          style={{ 
            boxShadow: '0 0 60px hsl(210 100% 55% / 0.8), inset 0 0 30px hsl(200 100% 65% / 0.6)'
          }} 
        />
        
        {/* Energy lines connecting cubes */}
        <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent" />
        <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-gradient-to-t from-primary to-transparent" />
        <div className="absolute left-0 top-1/2 h-0.5 w-8 bg-gradient-to-r from-primary to-transparent" />
        <div className="absolute right-0 top-1/2 h-0.5 w-8 bg-gradient-to-l from-primary to-transparent" />
      </div>
    </div>
  );
};
