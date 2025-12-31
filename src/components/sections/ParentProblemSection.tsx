import { motion } from "framer-motion";
import { HelpCircle, Brain, Lightbulb, Heart } from "lucide-react";

const questions = [
  { icon: Brain, text: "What is my child naturally good at?" },
  { icon: HelpCircle, text: "Why do they struggle in some environments?" },
  { icon: Lightbulb, text: "How do they actually learn best?" },
  { icon: Heart, text: "How can I support them without forcing or comparing?" },
];

export const ParentProblemSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight">
            The Parent <span className="text-gradient">Problem</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Most systems tell you how your child performed.
          </p>
          <p className="text-2xl text-accent font-semibold">
            Very few help you understand <span className="italic">why</span>.
          </p>
        </motion.div>

        {/* Question Cards - Staggered Layout */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-12">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -2, scale: 1.02 }}
              className="flex items-center gap-4 p-6 rounded-2xl glass-card border border-border/50 hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                <question.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground font-medium">{question.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-2xl font-display font-bold"
        >
          <span className="text-primary">Obi</span> exists to answer these questions clearly and early.
        </motion.p>
        </div>
      </section>
  );
};
