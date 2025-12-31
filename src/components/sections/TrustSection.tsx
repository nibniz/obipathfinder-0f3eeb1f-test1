import { motion } from "framer-motion";
import { Shield, Lock, Users, GraduationCap, Heart } from "lucide-react";

const trustPoints = [
  { icon: Shield, text: "No testing or ranking" },
  { icon: Users, text: "No comparison with other children" },
  { icon: Lock, text: "Data is encrypted and fully controlled by parents" },
  { icon: GraduationCap, text: "Designed with child psychologists and learning experts" },
];

export const TrustSection = () => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm mb-8">
            <Heart className="w-4 h-4" />
            Built with Care
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight">
            Privacy, <span className="text-gradient">Trust & Care</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            Your child's learning journey is always private and respectful.
          </p>
        </motion.div>

        {/* Trust Points - Centered Grid */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -2, scale: 1.02 }}
              className="p-6 rounded-2xl glass-card border border-border/50 flex items-center gap-4 hover:border-accent/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <point.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-foreground font-medium">{point.text}</p>
            </motion.div>
          ))}
        </div>
        </div>
      </section>
  );
};
