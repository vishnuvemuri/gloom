import { motion } from 'framer-motion';
import { Building, School, Zap, UserCheck, Monitor, MapPin, Calendar, ArrowRight } from 'lucide-react';

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

export default function TrainingSection() {
  return (
    <section id="training" className="section-padding bg-white dark:bg-navy">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <h2 className="mb-4">Professional Training</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Building tomorrow's workforce with industry-relevant training in technology, leadership, and innovation.
          </p>
          <a
            href="/training"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark hover:scale-105 transition-all duration-300"
          >
            <span>Explore Training</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
  );
}
