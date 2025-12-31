import { motion } from "framer-motion";
import { Clock, Mic, Eye, Hammer, Sparkles } from "lucide-react";

const sessionTypes = [
  { icon: Clock, text: "5–15 minute light sessions", label: "Quick & Fun" },
  { icon: Sparkles, text: "20–30 minute deeper learning", label: "Immersive" },
];

const modalities = [
  { icon: Mic, text: "Voice interaction", label: "Audio" },
  { icon: Eye, text: "Visual engagement", label: "Visual" },
  { icon: Hammer, text: "Hands-on projects", label: "Tactile" },
];

export const LearningExperienceSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight">
            Designed For <span className="text-gradient">Real Life</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            Not rigid schedules. Obi fits into everyday family life.
          </p>
        </motion.div>

        {/* Session Types */}
        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto mb-12">
          {sessionTypes.map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="flex-1 min-w-[260px] p-6 rounded-2xl glass-card border border-border/50 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-glow">
                  <session.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">{session.label}</span>
                  <p className="text-lg font-semibold text-foreground">{session.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modalities */}
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto mb-16">
          {modalities.map((modality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-4 rounded-full glass-card border border-border/50 flex items-center gap-3 hover:border-accent/40 transition-all duration-300"
            >
              <modality.icon className="w-5 h-5 text-accent" />
              <span className="font-medium text-foreground">{modality.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-2xl font-display font-bold text-accent"
        >
          Learning feels natural — not forced.
        </motion.p>
        </div>
      </section>
  );
};
