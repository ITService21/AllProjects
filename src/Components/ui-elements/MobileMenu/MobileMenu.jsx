import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import FormModal from "../../FormModal";

export const MobileMenu = ({ menuLinks, onClose }) => {
  const [expandedLinkId, setExpandedLinkId] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);

  const onMenuItemClick = (index) => {
    if (expandedLinkId === index) {
      setExpandedLinkId(null);
    } else {
      setExpandedLinkId(index);
    }
  };

  return (
    <motion.div 
      className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border border-white/20 overflow-hidden"
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
    >
      {/* Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 border-b border-gray-200/50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Menu</h3>
          <motion.button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ×
          </motion.button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-h-96 overflow-y-auto">
        <ul className="py-2">
          {menuLinks?.map((record, index) => {
            const Icon1 = record?.icon;
            const hasSubLinks = Array.isArray(record?.subLinks) && record?.subLinks?.length > 0;
            
            return (
              <motion.div
                key={record.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.li
                  className="mx-2 my-1"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50"
                    onClick={() => hasSubLinks && onMenuItemClick(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {Icon1 && (
                          <motion.div
                            className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Icon1 className="w-5 h-5 text-orange-600" />
                          </motion.div>
                        )}
                        
                        {record?.link ? (
                          <Link
                            to={record?.link}
                            className="text-gray-800 font-semibold hover:text-orange-600 transition-colors"
                            onClick={onClose}
                          >
                            {record?.name}
                          </Link>
                        ) : (
                          <span className="text-gray-800 font-semibold">
                            {record?.name}
                          </span>
                        )}
                      </div>
                      
                      {hasSubLinks && (
                        <motion.div
                          animate={{ rotate: expandedLinkId === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>

                  {/* Sub Links */}
                  <AnimatePresence>
                    {expandedLinkId === index && hasSubLinks && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-6 mt-2 space-y-1">
                          {record?.subLinks?.map((subLink, subIndex) => {
                            const Icon2 = subLink?.icon;
                            return (
                              <motion.div
                                key={subLink?.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                              >
                                <Link
                                  to={subLink?.link}
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 group"
                                  onClick={onClose}
                                >
                                  {Icon2 && (
                                    <motion.div
                                      className="w-6 h-6 bg-gray-100 group-hover:bg-orange-100 rounded-md flex items-center justify-center transition-colors"
                                      whileHover={{ scale: 1.1 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <Icon2 className="w-4 h-4 text-gray-600 group-hover:text-orange-600" />
                                    </motion.div>
                                  )}
                                  <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                                    {subLink?.name}
                                  </span>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              </motion.div>
            );
          })}
        </ul>
      </div>

      {/* Footer CTA */}
      <div className="px-6 py-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 border-t border-gray-200/50">
        <motion.button
          onClick={() => {
            setShowFormModal(true);
            onClose();
          }}
          className="block w-full text-center py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
        </motion.button>
      </div>

      {/* Form Modal */}
      <FormModal
        open={showFormModal}
        onClose={() => setShowFormModal(false)}
      />
    </motion.div>
  );
};
