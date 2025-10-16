import { motion } from 'framer-motion';
import { Package, Building2, FileCheck, Users, Microscope, TrendingUp, DollarSign, Shield, ArrowRight } from 'lucide-react';

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

export default function ProcurementSection() {
  return (
    <section id="procurement" className="section-padding bg-gray-50 dark:bg-navy-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <h2 className="mb-4">Procurement Services</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Strategic sourcing and vendor management designed to optimize costs and strengthen supply chains.
          </p>
          <a
            href="/procurement"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark hover:scale-105 transition-all duration-300"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((service, index) => (
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
  );
}
