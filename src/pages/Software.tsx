import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Server, Brain, Cloud, Smartphone, Database, Atom, GitBranch, Network, ArrowRight, CheckCircle } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const capabilities = [
  {
    icon: Server,
    title: 'Enterprise Application Development',
    description: 'Scalable, secure enterprise solutions tailored to complex business workflows and regulatory requirements.',
  },
  {
    icon: Brain,
    title: 'AI/ML and Data Science',
    description: 'Intelligent systems leveraging machine learning, deep learning, and advanced analytics for data-driven insights.',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Solutions',
    description: 'Modern architectures built for AWS, Azure, and GCP with containerization, serverless, and microservices.',
  },
  {
    icon: Smartphone,
    title: 'Full-Stack Development',
    description: 'End-to-end web and mobile applications with React, Angular, Vue, React Native, and Flutter expertise.',
  },
  {
    icon: Database,
    title: 'Database Solutions',
    description: 'Expert design and optimization for SQL, NoSQL, graph databases, and real-time data streaming platforms.',
  },
  {
    icon: Atom,
    title: 'Quantum Computing Research',
    description: 'Pioneering quantum algorithms and applications exploring the next frontier of computational capability.',
  },
  {
    icon: GitBranch,
    title: 'DevOps & CI/CD',
    description: 'Automated pipelines, infrastructure as code, and continuous delivery for rapid, reliable deployment.',
  },
  {
    icon: Network,
    title: 'API Development',
    description: 'RESTful and GraphQL APIs with robust documentation, security, and seamless third-party integrations.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements, define project scope, and create a comprehensive development roadmap.',
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description: 'Our team designs scalable system architecture and creates detailed technical specifications.',
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Agile development with continuous testing, code reviews, and quality assurance processes.',
  },
  {
    step: '04',
    title: 'Deployment & Integration',
    description: 'Seamless deployment to production with comprehensive integration testing and monitoring.',
  },
  {
    step: '05',
    title: 'Support & Maintenance',
    description: 'Ongoing support, updates, and maintenance to ensure optimal performance and security.',
  },
];

export default function Software() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        {/* Hero Section - Premium Enterprise Design */}
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
                  <span className="block text-white mb-1">Software</span>
                  <span className="block text-blue-400 font-medium mb-1">
                    Development
                  </span>
                  <span className="block text-white">Excellence</span>
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto font-normal"
                >
                  Transform your business with cutting-edge software solutions that scale, perform, and deliver measurable results.
                </motion.p>
                
                {/* Key Metrics */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="grid grid-cols-3 gap-8 pt-8"
                >
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-semibold text-blue-400 mb-1">500+</div>
                    <div className="text-sm text-slate-300 font-normal">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-1">99.9%</div>
                    <div className="text-sm text-slate-300 font-normal">Uptime SLA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-semibold text-blue-400 mb-1">24/7</div>
                    <div className="text-sm text-slate-300 font-normal">Support</div>
                  </div>
                </motion.div>
                
              </motion.div>
              
            </div>
          </div>
          
        </section>

        {/* Introduction */}
        <section className="section-padding bg-white dark:bg-navy">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="mb-6">Enterprise Software Solutions</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                We architect, develop, and deploy custom software solutions that drive innovation and competitive advantage. Our team combines technical expertise with industry knowledge to deliver products that exceed expectations and scale with your business growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section id="capabilities" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-navy-dark dark:to-navy">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Core Capabilities</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Our comprehensive software development services cover every aspect of modern application development, from enterprise systems to cutting-edge AI solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {capabilities.slice(0, isExpanded ? capabilities.length : 6).map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white dark:bg-navy-light rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-navy-light hover:border-[#00C6FF]/30 relative overflow-hidden"
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00C6FF]/5 to-[#007BFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00C6FF]/20 to-[#007BFF]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="w-8 h-8 text-[#007BFF] group-hover:text-[#00C6FF] transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-[#007BFF] transition-colors duration-300">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {!isExpanded && capabilities.length > 6 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center mt-12"
                >
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-navy-light text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-navy hover:text-primary dark:hover:text-primary transition-all duration-300"
                  >
                    <span>View All Capabilities</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Development Process */}
        <section className="section-padding bg-white dark:bg-navy relative overflow-hidden">
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Development Process</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                We follow a proven 5-step development process that ensures quality, transparency, and successful project delivery.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Connector */}
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00C6FF] via-[#007BFF] to-[#00C6FF] opacity-30"></div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative text-center group"
                  >
                    {/* Timeline Dot */}
                    <div className="hidden lg:block absolute -top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-[#00C6FF] to-[#007BFF] rounded-full border-4 border-white dark:border-navy shadow-lg z-10"></div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-white to-gray-50 dark:from-navy-light dark:to-navy rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-navy-light"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-[#00C6FF] to-[#007BFF] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-white font-bold text-xl">{step.step}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-[#007BFF] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-[#00C6FF] via-[#007BFF] to-[#1B2735] text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="container-custom text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-8"
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready to Build Your Next Software Solution?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Let's discuss your project requirements and create a custom software solution that drives your business forward.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center items-center"
              >
                <a
                  href="#capabilities"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300"
                >
                  View Case Studies
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
