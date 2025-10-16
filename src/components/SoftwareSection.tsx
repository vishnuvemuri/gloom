import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Server, Brain, Cloud, Smartphone, Database, Atom, GitBranch, Network, ArrowRight } from 'lucide-react';

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

export default function SoftwareSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="software" className="section-padding bg-white dark:bg-navy">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <h2 className="mb-4">Software Development</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            We deliver scalable enterprise software, AI-powered systems, and cloud-native architectures that drive innovation.
          </p>
          <a
            href="/software"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark hover:scale-105 transition-all duration-300"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.slice(0, 4).map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 dark:bg-navy-light rounded-xl p-6 border border-gray-200 dark:border-navy-light hover:border-primary/50 hover:shadow-lg transition-all duration-300"
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
      </div>
    </section>
  );
}
