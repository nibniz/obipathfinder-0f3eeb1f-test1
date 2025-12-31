import { motion } from "framer-motion";
import { Palette, FlaskConical, MessageSquare, Puzzle } from "lucide-react";

const activities = [
  { icon: Palette, label: "Creating" },
  { icon: FlaskConical, label: "Experimenting" },
  { icon: MessageSquare, label: "Expressing ideas" },
  { icon: Puzzle, label: "Solving real problems" },
];

export const ConfidenceSection = () => {
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
            Learning That Builds <span className="text-gradient">Real Confidence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            Every concept turns into a hands-on project.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-2xl text-foreground font-semibold mb-12"
        >
          Children learn by:
        </motion.p>

        {/* Activity Cards - Horizontal Row */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mb-16">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="flex-1 min-w-[140px] max-w-[180px] p-6 rounded-2xl glass-card border border-border/50 text-center hover:border-primary/40 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 shadow-glow">
                <activity.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="font-display font-bold text-foreground">{activity.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-2xl font-display font-bold text-primary"
        >
          Confidence grows from capability, not comparison.
        </motion.p>
        </div>
      </section>
  );
};
