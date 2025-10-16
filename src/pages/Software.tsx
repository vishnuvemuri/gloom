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
                Software Development Excellence
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                We deliver scalable enterprise software, AI-powered systems, and cloud-native architectures that drive innovation and competitive advantage.
              </p>
            </motion.div>
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
        <section className="section-padding bg-gray-50 dark:bg-navy-dark">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Core Capabilities</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Our comprehensive software development services cover every aspect of modern application development, from enterprise systems to cutting-edge AI solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {capabilities.slice(0, isExpanded ? capabilities.length : 6).map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-navy-light rounded-xl p-6 border border-gray-200 dark:border-navy-light hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-4">
                    <capability.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {capability.description}
                  </p>
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
        <section className="section-padding bg-white dark:bg-navy">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Our Development Process</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We follow a proven 5-step development process that ensures quality, transparency, and successful project delivery.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build Your Next Software Solution?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a custom software solution that drives your business forward.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                <span>Get a Consultation</span>
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
