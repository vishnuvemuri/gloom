import { motion } from 'framer-motion';
import { Building, School, Zap, UserCheck, Monitor, MapPin, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const programs = [
  {
    icon: Building,
    title: 'Corporate Training Programs',
    description: 'Customized training solutions for upskilling your workforce in emerging technologies and best practices.',
  },
  {
    icon: School,
    title: 'Academic Partnerships',
    description: 'Collaborative programs with universities and colleges to bridge the gap between education and industry.',
  },
  {
    icon: Zap,
    title: 'Intensive Bootcamps',
    description: 'Fast-paced, immersive learning experiences designed to transform beginners into job-ready professionals.',
  },
  {
    icon: UserCheck,
    title: 'One-on-One Mentorship',
    description: 'Personalized guidance from industry experts to accelerate career growth and skill development.',
  },
];

const deliveryMethods = [
  {
    icon: Building,
    title: 'On-Site Training',
    description: 'Instructors at your location',
  },
  {
    icon: Monitor,
    title: 'Virtual Sessions',
    description: 'Live online interactive classes',
  },
  {
    icon: Calendar,
    title: 'Bootcamp Intensives',
    description: 'Full immersion programs',
  },
];

const trainingAreas = [
  'Cloud Platforms (AWS, Azure, GCP)',
  'Machine Learning & AI',
  'DevOps & Infrastructure',
  'Full-Stack Development',
  'Data Science & Analytics',
  'Cybersecurity Fundamentals',
  'Agile & Scrum Methodologies',
  'Professional Communication',
];

const academicPartnerships = [
  {
    title: 'University Collaborations',
    description: 'Partnerships with leading universities to develop industry-relevant curriculum and programs.',
  },
  {
    title: 'Skill Workshops',
    description: 'Hands-on workshops and seminars for students and faculty on emerging technologies.',
  },
  {
    title: 'Placement Programs',
    description: 'Industry placement and internship programs to connect students with real-world opportunities.',
  },
];

export default function Training() {
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
                Professional Training & Development
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Building tomorrow's workforce with industry-relevant training in technology, leadership, and innovation.
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
              <h2 className="mb-6">Developing Talent That Drives Innovation</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Empower your team with cutting-edge skills through our comprehensive training programs. From corporate workshops to intensive bootcamps, we deliver practical knowledge that drives real-world results and prepares professionals for the challenges of tomorrow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="section-padding bg-gray-50 dark:bg-navy-dark">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Training Programs</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Our diverse range of training programs caters to different learning needs and organizational requirements.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-navy-light dark:to-navy-light rounded-xl p-6 border border-orange-200 dark:border-navy hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {program.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Partnerships */}
        <section className="section-padding bg-white dark:bg-navy">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Academic Partnerships</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We collaborate with educational institutions to bridge the gap between academia and industry.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {academicPartnerships.map((partnership, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-navy-light rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <School className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    {partnership.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {partnership.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Methods & Training Areas */}
        <section className="section-padding bg-gray-50 dark:bg-navy-dark">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Delivery Methods</h3>
                <div className="space-y-4">
                  {deliveryMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 bg-white dark:bg-navy-light rounded-lg"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{method.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{method.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Training Areas of Excellence</h3>
                <div className="grid grid-cols-1 gap-3">
                  {trainingAreas.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-white dark:bg-navy-light rounded-lg hover:bg-gray-100 dark:hover:bg-navy transition-colors"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transform Your Team's Skills
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Whether you need to upskill your entire organization or train a specific team, our customized programs deliver measurable results.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                <span>Enroll or Partner with Us</span>
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
