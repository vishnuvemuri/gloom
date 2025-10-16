import { motion } from 'framer-motion';
import { Target, Lightbulb, Award, Shield, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Embracing cutting-edge technologies and methodologies to solve complex business challenges.',
  },
  {
    icon: Target,
    title: 'Client Partnership',
    description: 'Building long-term relationships through transparency, collaboration, and shared success.',
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'Delivering solutions that exceed industry standards with rigorous testing and attention to detail.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Operating with honesty, ethics, and accountability in every interaction and deliverable.',
  },
];

const leadership = [
  {
    name: 'Tirumala Raju Mahali',
    title: 'Managing Director',
  },
  {
    name: 'Vishnuvardhan Vemuri',
    title: 'Managing Director',
  },
  {
    name: 'Syam Gopal Meda',
    title: 'Managing Director',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-navy-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <h2 className="mb-4">About GloomDev</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            GloomDev empowers organizations through innovation, integrity, and excellence across every service we deliver.
          </p>
          <a
            href="/about"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark hover:scale-105 transition-all duration-300"
          >
            <span>Read More About Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-navy-light rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-navy"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{value.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
