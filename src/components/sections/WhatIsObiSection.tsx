import { motion } from "framer-motion";
import { Bot, Shield, Sparkles, XCircle } from "lucide-react";
import characterBoy from "@/assets/charactor_boy.png";

const features = [
  { icon: XCircle, text: "No exams" },
  { icon: Shield, text: "No pressure" },
  { icon: Sparkles, text: "No one-size-fits-all" },
];

export const WhatIsObiSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout with Z-pattern */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm mb-8">
              <Bot className="w-4 h-4" />
              Meet Obi
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 uppercase tracking-tight leading-tight">
              Your Child's <br />
              <span className="text-gradient">Learning Companion</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Obi is an empathetic, AI-powered companion designed to understand your child as they are.
            </p>

            <p className="text-lg text-foreground mb-10">
              It does not test, rank, or label children. <br />
              <span className="text-accent font-medium">
                Instead, it observes how your child thinks, feels, and learns.
              </span>
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-muted border border-border hover:border-primary/30 transition-colors"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="font-semibold">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Floating Character Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-3xl scale-75" />
              <motion.div
                className="relative"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.img
                  src={characterBoy}
                  alt="Obi Character"
                  className="w-64 md:w-80 lg:w-96 xl:w-[400px] h-auto object-contain drop-shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        </div>
      </section>
  );
};
