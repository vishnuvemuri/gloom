import { motion } from 'framer-motion';
import { Package, Building2, FileCheck, Users, Microscope, TrendingUp, DollarSign, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const services = [
  {
    icon: Package,
    title: 'Corporate Procurement',
    description: 'Complete procurement lifecycle management from requisition to delivery with vendor coordination.',
  },
  {
    icon: Building2,
    title: 'Tech Infrastructure',
    description: 'Hardware, networking equipment, and IT infrastructure sourcing for enterprises of all sizes.',
  },
  {
    icon: FileCheck,
    title: 'Software Licensing',
    description: 'Strategic software license management, renewals, and asset tracking for cost control.',
  },
  {
    icon: Users,
    title: 'Vendor Management',
    description: 'End-to-end vendor selection, negotiation, contracting, and ongoing relationship management.',
  },
  {
    icon: Microscope,
    title: 'Research Equipment',
    description: 'Specialized procurement for laboratories, academic institutions, and R&D departments.',
  },
  {
    icon: TrendingUp,
    title: 'Market Analysis',
    description: 'Comprehensive market research and trend analysis to inform strategic purchasing decisions.',
  },
  {
    icon: DollarSign,
    title: 'Cost Optimization',
    description: 'Data-driven strategies to reduce total cost of ownership while maintaining quality standards.',
  },
  {
    icon: Shield,
    title: 'Compliance Assurance',
    description: 'Ensuring all procurement activities meet regulatory, legal, and organizational policy requirements.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Requirements Analysis',
    description: 'We analyze your procurement needs, budget constraints, and quality requirements.',
  },
  {
    step: '02',
    title: 'Market Research',
    description: 'Comprehensive market analysis to identify potential vendors and optimal pricing.',
  },
  {
    step: '03',
    title: 'Vendor Selection',
    description: 'Strategic vendor evaluation and selection based on quality, cost, and reliability.',
  },
  {
    step: '04',
    title: 'Negotiation & Contracting',
    description: 'Expert negotiation to secure favorable terms and comprehensive contract management.',
  },
  {
    step: '05',
    title: 'Delivery & Support',
    description: 'Ongoing vendor management, quality assurance, and performance monitoring.',
  },
];

export default function Procurement() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          {/* Premium Background Pattern */}
          <div className="absolute inset-0">
            
            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-300 rounded-full animate-pulse opacity-30" style={{ animationDelay: '3s' }}></div>
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
                  <span className="block text-white mb-1">Strategic</span>
                  <span className="block text-purple-400 font-medium mb-1">
                    Procurement
                  </span>
                  <span className="block text-white">Services</span>
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto font-normal"
                >
                  Strategic sourcing and vendor management designed to optimize costs and strengthen supply chains.
                </motion.p>
                
                {/* Key Metrics */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="grid grid-cols-3 gap-8 pt-8"
                >
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-semibold text-purple-400 mb-1">15-25%</div>
                    <div className="text-sm text-slate-300 font-normal">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-semibold text-pink-400 mb-1">100%</div>
                    <div className="text-sm text-slate-300 font-normal">Compliance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-semibold text-purple-400 mb-1">24/7</div>
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
              <h2 className="mb-6">Optimizing Cost and Efficiency</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Our procurement experts streamline your supply chain, negotiate favorable terms, and ensure you receive the best value for every purchase. We handle complexity so you can focus on core business operations and strategic growth initiatives.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Services */}
        <section className="section-padding bg-gray-50 dark:bg-navy-dark">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Core Procurement Solutions</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Our comprehensive procurement services cover every aspect of strategic sourcing, from vendor management to cost optimization.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white dark:bg-navy-light rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-navy group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Excellence */}
        <section className="section-padding bg-white dark:bg-navy">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Process Excellence</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Our proven 5-step procurement process ensures optimal results, cost savings, and supply chain reliability.
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
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
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

        {/* Benefits Section */}
        <section className="section-padding bg-gray-50 dark:bg-navy-dark">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Why Choose Our Procurement Services?</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Our strategic approach delivers measurable results and long-term value for your organization.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Cost Reduction',
                  description: 'Average 15-25% cost savings through strategic sourcing and vendor negotiation.',
                },
                {
                  title: 'Quality Assurance',
                  description: 'Rigorous vendor evaluation and quality control processes ensure superior products.',
                },
                {
                  title: 'Risk Mitigation',
                  description: 'Comprehensive risk assessment and mitigation strategies protect your supply chain.',
                },
                {
                  title: 'Compliance Management',
                  description: 'Full regulatory compliance and documentation for all procurement activities.',
                },
                {
                  title: 'Vendor Relationships',
                  description: 'Strong partnerships with reliable vendors for long-term supply chain stability.',
                },
                {
                  title: 'Process Optimization',
                  description: 'Streamlined procurement processes that improve efficiency and reduce lead times.',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-navy-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Optimize Your Procurement?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let our team analyze your current procurement processes and identify opportunities for cost savings and efficiency improvements.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                <span>Schedule a Procurement Consultation</span>
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
