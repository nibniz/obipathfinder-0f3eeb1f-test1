import { motion } from "framer-motion";
import { Heart, MapPin, Mail, Phone } from "lucide-react";
import obiLogo from "@/assets/obi-logo.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 relative border-t border-border/50 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={obiLogo} alt="Obi" className="h-10" />
            <p className="text-muted-foreground text-sm max-w-xs">
              AI-powered learning companion helping children discover who they are and grow with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors text-sm">How It Works</a></li>
              <li><a href="#parents" className="text-muted-foreground hover:text-primary transition-colors text-sm">For Parents</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>Obi Innovations Pvt Ltd, Bangalore, India</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <a href="mailto:hello@obi.life" className="hover:text-primary transition-colors">hello@obi.life</a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for curious minds
            </p>

            <p className="text-muted-foreground text-sm">
              © {currentYear} Obi Innovations Pvt Ltd. All rights reserved.
            </p>
          </motion.div>
        </div>
        </div>
      </footer>
  );
};
