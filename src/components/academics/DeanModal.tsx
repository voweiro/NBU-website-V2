import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";


interface DeanModalProps {
  isOpen: boolean;
  onClose: () => void;
  dean: {
    name: string;
    title: string;
    bio: string;
    image: string;
  };
}

const DeanModal: FC<DeanModalProps> = ({ isOpen, onClose, dean }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-screen overflow-y-auto p-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Dean Image */}
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src={dean.image}
                alt={dean.name}
                fill
                className="rounded-full object-cover"
              />
            </div>

            {/* Name & Title */}
            <h2 className="text-2xl font-bold text-center">{dean.name}</h2>
            <p className="text-center text-sm text-gray-500 mb-4">
              {dean.title}
            </p>

            {/* Bio */}
            <p className="text-gray-700 text-sm whitespace-pre-line">
              {dean.bio}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeanModal;
