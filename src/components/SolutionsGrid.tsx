import { motion } from 'framer-motion';
import { Code2, ShoppingCart, GraduationCap, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: Code2,
    title: 'Software Development',
    summary: 'End-to-end custom software solutions powered by cutting-edge technologies and agile methodologies.',
    features: [
      'Enterprise Application Development',
      'AI/ML and Data Science Integration',
      'Cloud-Native Architecture',
      'Full-Stack Web & Mobile Development',
      'Quantum Computing Research',
      'API Development & Integration',
    ],
    link: '/software',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: ShoppingCart,
    title: 'Procurement Services',
    summary: 'Strategic procurement solutions that optimize costs, ensure compliance, and streamline vendor relationships.',
    features: [
      'Corporate Procurement Management',
      'Technology Infrastructure Sourcing',
      'Software Licensing & Asset Management',
      'Vendor Selection & Negotiation',
      'Research Equipment Procurement',
      'Market Analysis & Cost Optimization',
    ],
    link: '/procurement',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: GraduationCap,
    title: 'Professional Training',
    summary: 'Comprehensive training programs that upskill teams and prepare professionals for tomorrow challenges.',
    features: [
      'Corporate Training Programs',
      'Academic Institution Partnerships',
      'Intensive Coding Bootcamps',
      'One-on-One Mentorship',
      'Cloud, ML, DevOps & More',
      'Flexible Delivery Methods',
    ],
    link: '/training',
    gradient: 'from-orange-500 to-red-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function SolutionsGrid() {
  return (
    <section id="solutions" className="section-padding bg-gray-50 dark:bg-navy-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Our Solutions</h2>
          <p className="text-gray-600 dark:text-gray-400 mx-auto max-w-3xl">
            We offer integrated technology, procurement, and training solutions to empower organizations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group bg-white dark:bg-navy-light rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-navy hover:border-primary/50"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="mb-3 text-gray-900 dark:text-white">{solution.title}</h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 text-base leading-relaxed">
                {solution.summary}
              </p>

              <div className="mb-6">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {solution.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start text-xs text-gray-700 dark:text-gray-300">
                      <span className="inline-block w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
                {solution.features.length > 4 && (
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    +{solution.features.length - 4} more capabilities
                  </p>
                )}
              </div>

              <a
                href={solution.link}
                className="inline-flex items-center space-x-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300"
              >
                <span>Explore Details</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
