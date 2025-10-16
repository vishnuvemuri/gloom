import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, Send, CheckCircle2, MapPin, ArrowRight } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

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
    coordinates: {
      lat: 16.5062,
      lng: 80.6480
    },
    address: 'GloomDev Private Limited, Vijayawada, Andhra Pradesh'
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
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      // Try serverless function first (for Vercel/Netlify)
      let response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // If serverless function fails, try PHP backend
      if (!response.ok) {
        response = await fetch('/contact-handler.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      }

      if (response.ok) {
        const result = await response.json();
        setIsSubmitted(true);
        setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Server function not available');
      }
      
    } catch (error) {
      console.log('Serverless function not available, using mailto fallback');
      
      // Fallback to mailto for local development or if serverless function fails
      const subject = encodeURIComponent(`Contact Form Message from ${formData.name}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Service Interest: ${formData.service || 'Not specified'}

Message:
${formData.message}

---
This message was sent from the GloomDev contact form.
      `);
      
      const mailtoLink = `mailto:info@gloomdev.in?subject=${subject}&body=${body}`;
      window.open(mailtoLink);
      
      setIsSubmitted(true);
      setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } finally {
      setIsLoading(false);
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
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          {/* Premium Background Pattern */}
          <div className="absolute inset-0">
            
            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse opacity-30" style={{ animationDelay: '3s' }}></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="flex items-center justify-center min-h-screen py-20">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center space-y-8 max-w-4xl mx-auto px-4"
              >
                
                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed tracking-normal mb-6"
                >
                  <span className="block text-white mb-1">Contact</span>
                  <span className="block text-blue-400 font-medium mb-1">
                    Us
                  </span>
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto font-normal"
                >
                  We're here to help you achieve your digital and operational goals. Reach out today to discuss your project.
                </motion.p>
                
                {/* Key Metrics */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="grid grid-cols-3 gap-8 pt-8"
                >
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-semibold text-blue-400 mb-1">24/7</div>
                    <div className="text-sm text-slate-300 font-normal">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-1">1hr</div>
                    <div className="text-sm text-slate-300 font-normal">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-semibold text-blue-400 mb-1">100%</div>
                    <div className="text-sm text-slate-300 font-normal">Satisfaction</div>
                  </div>
                </motion.div>
                
              </motion.div>
              
            </div>
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
                      disabled={isLoading}
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                      className={`w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center space-x-2 ${
                        isLoading ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
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

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Office Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative bg-gradient-to-br from-white to-gray-50 dark:from-navy-light dark:to-navy rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-navy/50 overflow-hidden"
                  >
                    {/* Subtle Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                    
                    <div className="relative z-10 flex items-start space-x-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <MapPin className="w-10 h-10 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-4">
                          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-1">{office.city}</h3>
                          <p className="text-primary font-medium text-lg">{office.state}</p>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-base leading-relaxed">{office.description}</p>
                        
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Address</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{office.address}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Interactive Map */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white dark:bg-navy-light rounded-2xl shadow-lg border border-gray-200 dark:border-navy overflow-hidden">
                  {/* Map Header */}
                  <div className="px-6 py-4 border-b border-gray-200 dark:border-navy">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Office Location
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Vijayawada, Andhra Pradesh
                          </p>
                        </div>
                      </div>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${offices[0].coordinates.lat},${offices[0].coordinates.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
                      >
                        <MapPin className="w-4 h-4" />
                        <span>Directions</span>
                      </a>
                    </div>
                  </div>
                  
                  {/* Google Maps Embed */}
                  <div className="relative w-full h-80">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.1234567890123!2d80.6480!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35a8c8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="GloomDev Office Location - Vijayawada"
                    />
                  </div>
                  
                  {/* Map Footer */}
                  <div className="px-6 py-4 bg-gray-50 dark:bg-navy border-t border-gray-200 dark:border-navy">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">GloomDev Office</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Open</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <a
                          href="tel:+91-XXXXXXXXXX"
                          className="inline-flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          <span>Call</span>
                        </a>
                        <a
                          href="mailto:info@gloomdev.in"
                          className="inline-flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Email</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
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
