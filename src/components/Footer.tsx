import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Globe } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Software', href: '#software' },
  { label: 'Procurement', href: '#procurement' },
  { label: 'Training', href: '#training' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="bg-navy dark:bg-navy-dark text-gray-300 border-t border-navy-light">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-bold text-white">GloomDev</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Empowering Innovation through Technology, Procurement, and Training.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-navy-light hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:info@gloomdev.in" className="hover:text-primary transition-colors">
                  info@gloomdev.in
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:hr@gloomdev.in" className="hover:text-primary transition-colors">
                  hr@gloomdev.in
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <a href="tel:+918367399638" className="hover:text-primary transition-colors block">
                    +91 83673 99638
                  </a>
                  <a href="tel:+918142189138" className="hover:text-primary transition-colors block">
                    +91 81421 89138
                  </a>
                  <a href="tel:+919154882509" className="hover:text-primary transition-colors block">
                    +91 91548 82509
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Locations</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Vijayawada, Andhra Pradesh</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-navy-light pt-8 text-center text-sm"
        >
          <p>Copyright 2025 GloomDev Private Limited. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
