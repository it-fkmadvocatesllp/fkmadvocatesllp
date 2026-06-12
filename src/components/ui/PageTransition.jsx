import { motion as Motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const PageTransition = ({ children }) => (
  <Motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={{ duration: 0.35, ease: 'easeOut' }}
  >
    {children}
  </Motion.div>
);

export default PageTransition;
