import { motion } from 'framer-motion';
import { MapPin, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const locations = [
  {
    city: 'Vijayawada',
    address: 'GloomDev Private Limited, Vijayawada Office, Andhra Pradesh',
    coordinates: { top: '58%', left: '48%' },
  },
];

export default function LocationsMap() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="section-padding bg-white dark:bg-navy">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Our Locations</h2>
          <p className="text-gray-600 dark:text-gray-400 mx-auto">
            Located in Vijayawada to serve you better.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')] bg-cover bg-center opacity-20"></div>

            <div className="relative w-full h-full">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2, type: 'spring' }}
                  className="absolute"
                  style={{ top: location.coordinates.top, left: location.coordinates.left }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="relative cursor-pointer group"
                  >
                    <div className="absolute inset-0 bg-primary rounded-full animate-pulse-slow opacity-50 scale-150"></div>
                    <MapPin className="w-8 h-8 text-primary relative z-10 drop-shadow-lg" fill="currentColor" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {location.city}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 dark:bg-navy-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-navy"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {location.city}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {location.address}
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(location.address, index)}
                    className="ml-4 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-navy transition-colors"
                    aria-label="Copy address"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
