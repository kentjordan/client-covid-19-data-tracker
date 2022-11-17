import React from 'react';
import Table from '@components/ui/tables/Table';
import { motion } from 'framer-motion';

const NotYetDone = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex min-h-[100vh] flex-col items-center justify-center text-center"
    >
      <h1 className="text-4xl font-bold">COVID-19 DATA TRACKER</h1>
      <h1 className="mt-4 text-lg">Work in progress. Stay tuned. </h1>
    </motion.div>
  );
};

export default NotYetDone;
