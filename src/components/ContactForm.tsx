import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Business Inquiries',
    value: 'info@gloomdev.in',
    href: 'mailto:info@gloomdev.in',
  },
  {
    icon: Mail,
    label: 'HR & Careers',
    value: 'hr@gloomdev.in',
    href: 'mailto:hr@gloomdev.in',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon-Fri: 9AM - 6PM IST',
    href: null,
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', company: '', email: '', phone: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-navy-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400 mx-auto max-w-2xl mb-6">
            We're here to help you achieve your digital and operational goals. Reach out today to discuss your project.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark hover:scale-105 transition-all duration-300"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-navy-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Business Inquiries</h3>
            <a
              href="mailto:info@gloomdev.in"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              info@gloomdev.in
            </a>
          </motion.div>

          

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-navy-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Business Hours</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Mon-Fri: 9AM - 6PM IST
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
