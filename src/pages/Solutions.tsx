import { motion } from 'framer-motion';
import { Code2, ShoppingCart, GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

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

export default function Solutions() {
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
                Our Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                We offer integrated technology, procurement, and training solutions to empower organizations and drive digital transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="section-padding bg-gray-50 dark:bg-navy-dark">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Comprehensive Service Portfolio</h2>
              <p className="text-gray-600 dark:text-gray-400 mx-auto max-w-3xl">
                Our integrated approach combines cutting-edge technology, strategic procurement, and professional development to deliver end-to-end solutions that transform businesses.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="group bg-white dark:bg-navy-light rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-navy hover:border-primary/50"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="mb-3 text-gray-900 dark:text-white text-xl font-semibold">{solution.title}</h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-base leading-relaxed">
                    {solution.summary}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={solution.link}
                    className="inline-flex items-center space-x-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    <span>Explore Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our integrated solutions can drive your digital transformation and business growth.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                <span>Get Started Today</span>
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
