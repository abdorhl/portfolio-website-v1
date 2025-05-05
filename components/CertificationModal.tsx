import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileUrl: string;
}

export default function CertificationModal({ isOpen, onClose, fileUrl }: CertificationModalProps) {
  const isPDF = fileUrl ? fileUrl.toLowerCase().endsWith('.pdf') : false;

  return (
    <AnimatePresence>
      {isOpen && fileUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full mx-4 h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 z-50"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {isPDF ? (
              <iframe
                src={fileUrl}
                className="w-full h-full rounded-lg shadow-2xl"
                title="Certification PDF"
              />
            ) : (
              <img
                src={fileUrl}
                alt="Certification"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 