import { motion } from "framer-motion";
import { Trophy, Brain, Zap, Compass } from "lucide-react";

const insights = [
  { icon: Trophy, text: "What their child is naturally good at" },
  { icon: Brain, text: "How they think and respond emotionally" },
  { icon: Zap, text: "How they learn fastest and with least friction" },
  { icon: Compass, text: "What kinds of future paths may suit them" },
];

export const ParentGainSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight">
            What You'll Finally <span className="text-gradient">Understand</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            Obi gives parents clarity on what matters most.
          </p>
        </motion.div>

        {/* Insight Cards - Floating Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl glass-card border border-border/50 flex items-center gap-5 hover:border-primary/40 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <insight.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-lg text-foreground font-medium">{insight.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-2xl font-display font-bold text-foreground mb-2">
              Not labels. Not predictions.
            </p>
            <p className="text-xl text-accent font-semibold">
              Just meaningful understanding.
            </p>
          </motion.div>
        </div>
        </div>
      </section>
  );
};
