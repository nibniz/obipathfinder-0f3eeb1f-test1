import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import cosmicBg from "@/assets/cosmic-hero-bg.jpg";

interface CosmicBackgroundProps {
  children: ReactNode;
  parallax?: boolean;
  overlay?: boolean;
  overlayOpacity?: number;
  starfield?: boolean;
}

// Generate random star positions
const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.8 + 0.2,
    twinkleDelay: Math.random() * 4,
  }));
};

const stars = generateStars(200);

export const CosmicBackground = ({ 
  children, 
  parallax = false,
  overlay = true,
  overlayOpacity = 0.5,
  starfield = false
}: CosmicBackgroundProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const nebulaY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  if (starfield) {
    return (
      <div ref={sectionRef} className="relative overflow-hidden">
        {/* Deep blue cosmic background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0f1429]" />
        
        {/* Animated Nebulae Layers with Parallax */}
        <motion.div 
          className="absolute inset-0 opacity-40"
          style={{ y: nebulaY }}
        >
          {/* Cyan Nebula */}
          <motion.div
            className="absolute top-[10%] left-[20%] w-[600px] h-[400px] rounded-full blur-[120px]"
            style={{
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, rgba(59, 130, 246, 0.4) 50%, transparent 100%)',
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Purple Nebula */}
          <motion.div
            className="absolute top-[50%] right-[15%] w-[500px] h-[500px] rounded-full blur-[100px]"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, rgba(99, 102, 241, 0.3) 50%, transparent 100%)',
            }}
            animate={{
              x: [0, -40, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          
          {/* Blue Nebula */}
          <motion.div
            className="absolute bottom-[20%] left-[50%] w-[700px] h-[300px] rounded-full blur-[140px]"
            style={{
              background: 'radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(34, 211, 238, 0.3) 50%, transparent 100%)',
            }}
            animate={{
              x: [0, 60, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>

        {/* Stars Layer with Parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: star.size > 2 
                  ? `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8), 0 0 ${star.size * 4}px rgba(255, 255, 255, 0.4)`
                  : `0 0 ${star.size}px rgba(255, 255, 255, 0.6)`,
              }}
              animate={{
                opacity: [star.opacity * 0.5, star.opacity, star.opacity * 0.5],
                scale: [1, star.size > 2 ? 1.2 : 1, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.twinkleDelay,
              }}
            />
          ))}
          
          {/* Bright stars with diffraction spikes */}
          {stars.filter((_, i) => i % 15 === 0).map((star, idx) => (
            <motion.div
              key={`bright-${star.id}`}
              className="absolute"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: '4px',
                height: '4px',
              }}
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.3,
              }}
            >
              {/* Cross-shaped diffraction spikes */}
              <div className="absolute inset-0 bg-white rounded-full" />
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/80 transform -translate-y-1/2" />
              <div className="absolute top-0 left-1/2 h-full w-[1px] bg-white/80 transform -translate-x-1/2" />
            </motion.div>
          ))}
        </motion.div>

        {/* Overlay */}
        {overlay && (
          <div 
            className="absolute inset-0 z-[1]"
            style={{ 
              backgroundColor: `hsl(var(--background) / ${overlayOpacity})`
            }}
          />
        )}
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      {/* Parallax Background Image */}
      {parallax ? (
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${cosmicBg})`,
            y: backgroundY
          }}
        >
          {overlay && (
            <div 
              className="absolute inset-0"
              style={{ 
                backgroundColor: `hsl(var(--background) / ${overlayOpacity})`
              }}
            />
          )}
        </motion.div>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cosmicBg})` }}
        >
          {overlay && (
            <div 
              className="absolute inset-0"
              style={{ 
                backgroundColor: `hsl(var(--background) / ${overlayOpacity})`
              }}
            />
          )}
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

