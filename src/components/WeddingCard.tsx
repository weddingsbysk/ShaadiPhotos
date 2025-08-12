import { motion } from 'framer-motion';
import type { Wedding } from '../types';
import { Calendar, MapPin } from 'lucide-react';

interface WeddingCardProps {
  wedding: Wedding;
  onClick: () => void;
}

const WeddingCard = ({ wedding, onClick }: WeddingCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={wedding.coverImage}
          alt={wedding.title}
          className="w-full h-64 sm:h-80 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <motion.h3 
          className="text-xl font-light text-gray-900 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {wedding.title}
        </motion.h3>
        
        <motion.p 
          className="text-2xl font-light text-rose-500 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {wedding.couple}
        </motion.p>
        
        <div className="space-y-2 text-sm text-gray-600">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Calendar className="h-4 w-4" />
            <span>{wedding.date}</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <MapPin className="h-4 w-4" />
            <span>{wedding.location}</span>
          </motion.div>
        </div>
        
        <motion.p 
          className="text-gray-600 mt-4 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {wedding.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default WeddingCard;