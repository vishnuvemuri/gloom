import { motion } from 'framer-motion';
import { Target, Lightbulb, Award, Shield, ArrowRight, Users, MapPin, Calendar } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation Excellence',
    description: 'Embracing cutting-edge technologies and methodologies to solve complex business challenges.',
  },
  {
    icon: Target,
    title: 'Client Partnership',
    description: 'Building long-term relationships through transparency, collaboration, and shared success.',
  },
  {
    icon: Award,
    title: 'Quality Commitment',
    description: 'Delivering solutions that exceed industry standards with rigorous testing and attention to detail.',
  },
  {
    icon: Shield,
    title: 'Professional Integrity',
    description: 'Operating with honesty, ethics, and accountability in every interaction and deliverable.',
  },
];

const leadership = [
  {
    name: 'Tirumala Raju Mahali',
    title: 'Managing Director',
    bio: 'Visionary leader with extensive experience in technology innovation and business strategy.',
  },
  {
    name: 'Vishnuvardhan Vemuri',
    title: 'Managing Director',
    bio: 'Expert in digital transformation and enterprise solutions with a focus on client success.',
  },
  {
    name: 'Syam Gopal Meda',
    title: 'Managing Director',
    bio: 'Strategic leader specializing in procurement optimization and operational excellence.',
  },
];

const milestones = [
  {
    year: '2024',
    title: 'Founded',
    description: 'GloomDev was established in June 2024 with a mission to redefine business efficiency through intelligent technology.',
  },
  {
    year: '2024',
    title: 'First Milestone',
    description: 'Delivered enterprise-grade software solutions leveraging AI and cloud-native architectures.',
  },
  {
    year: '2024',
    title: 'Training Division',
    description: 'Launched specialized training programs to empower students and professionals in modern technologies.',
  },
  {
    year: '2025',
    title: 'Expansion',
    description: 'Grew our operations nationwide, collaborating with clients across industries to deliver scalable digital ecosystems.',
  },
  {
    year: '2025',
    title: 'Procurement Solutions',
    description: 'Introduced advanced procurement and automation platforms for optimized business operations.',
  },
  {
    year: '2026',
    title: 'Future Vision',
    description: 'Innovating with Agentic AI, IoT, and Cloud Intelligence to build adaptive, self-driven business systems that shape the future of technology.',
  },
];

export default function About() {
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
                  <span className="block text-white mb-1">About</span>
                  <span className="block text-blue-400 font-medium mb-1">
                    GloomDev
                  </span>
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto font-normal"
                >
                  Founded in 2024, GloomDev Private Limited is built on innovation, technology, and trust — driving digital transformation with next-gen solutions.
                </motion.p>
                
                {/* Key Metrics */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="grid grid-cols-3 gap-8 pt-8"
                >
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-semibold text-blue-400 mb-1">2024</div>
                    <div className="text-sm text-slate-300 font-normal">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-1">100%</div>
                    <div className="text-sm text-slate-300 font-normal">Client Satisfaction</div>
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

        {/* Mission Statement */}
        <section className="section-padding bg-white dark:bg-navy">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="mb-6">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-6">
                GloomDev Private Limited is a technology solutions provider committed to empowering businesses through innovation, strategic procurement, and professional development. Based in Vijayawada, we serve clients ranging from startups to enterprises.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Our mission is to bridge the gap between emerging technologies and real-world business needs, delivering solutions that drive measurable growth and competitive advantage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-gray-50 dark:bg-navy-dark">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Our Core Values</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                These fundamental principles guide everything we do and shape our relationships with clients, partners, and team members.
              </p>
            </motion.div>

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
          </div>
        </section>

        {/* Leadership Team */}
        <section className="section-padding bg-white dark:bg-navy">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Leadership Team</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Our experienced leadership team brings together diverse expertise in technology, business strategy, and client success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 dark:bg-navy-light rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{leader.name.charAt(0)}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{leader.name}</h4>
                  <p className="text-sm text-primary font-medium mb-3">{leader.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{leader.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="section-padding bg-gray-50 dark:bg-navy-dark">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Our Journey</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                From our founding to today, we've been committed to growth, innovation, and client success.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary-dark"></div>
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white dark:bg-navy-light rounded-lg p-6 shadow-md">
                        <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-navy-dark"></div>
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
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
                Join Our Team
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation and excellence.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                <span>Explore Career Opportunities</span>
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
