import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, Send, CheckCircle2, MapPin, ArrowRight } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const contactInfo = [
  {
    icon: Mail,
    label: 'Business Inquiries',
    value: 'tirumalarajumahali@gloomdev.in',
    href: 'mailto:tirumalarajumahali@gloomdev.in',
  },
  {
    icon: Mail,
    label: 'HR & Careers',
    value: 'hr@gloomdev.in',
    href: 'mailto:hr@gloomdev.in',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 83673 99638',
    href: 'tel:+918367399638',
  },
  {
    icon: Phone,
    label: 'Alternate',
    value: '+91 81421 89138',
    href: 'tel:+918142189138',
  },
  {
    icon: Phone,
    label: 'Support',
    value: '+91 91548 82509',
    href: 'tel:+919154882509',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon-Fri: 9AM - 6PM IST',
    href: null,
  },
];

const offices = [
  {
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    description: 'Our headquarters and primary development center.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
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
        setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                We're here to help you achieve your digital and operational goals. Reach out today to discuss your project.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Overview */}
        <section className="section-padding bg-white dark:bg-navy">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Get In Touch</h2>
              <p className="text-gray-600 dark:text-gray-400 mx-auto max-w-3xl">
                Ready to transform your business? Let's discuss how we can help you achieve your goals with our comprehensive solutions.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-gray-900 dark:text-white font-medium hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">Thank You!</h3>
                    <p className="text-green-600 dark:text-green-300">
                      Your message has been received. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white dark:bg-navy-light border ${
                          errors.name ? 'border-red-500' : 'border-gray-300 dark:border-navy'
                        } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 dark:text-white`}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white dark:bg-navy-light border border-gray-300 dark:border-navy rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white dark:bg-navy-light border ${
                            errors.email ? 'border-red-500' : 'border-gray-300 dark:border-navy'
                          } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 dark:text-white`}
                          placeholder="you@example.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white dark:bg-navy-light border border-gray-300 dark:border-navy rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white dark:bg-navy-light border border-gray-300 dark:border-navy rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                      >
                        <option value="">Select a service</option>
                        <option value="software">Software Development</option>
                        <option value="procurement">Procurement Services</option>
                        <option value="training">Professional Training</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 bg-white dark:bg-navy-light border ${
                          errors.message ? 'border-red-500' : 'border-gray-300 dark:border-navy'
                        } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 dark:text-white resize-none`}
                        placeholder="Tell us about your project or inquiry..."
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="section-padding bg-gray-50 dark:bg-navy-dark">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Our Offices</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We serve our clients with local expertise and global standards from our Vijayawada office.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-navy-light rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{office.city}</h3>
                  <p className="text-primary font-medium mb-3">{office.state}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{office.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Inquiry */}
        <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Partnership Opportunities
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Interested in partnering with us? We're always looking for strategic partnerships that create mutual value.
              </p>
              <a
                href="mailto:partnerships@gloomdev.in"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                <span>Explore Partnerships</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
