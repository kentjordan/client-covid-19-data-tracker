import DashboardContainer from '@components/containers/Dashboard.container';
import { IDashboard } from '@interfaces/models/IDashboard';
import axios from 'axios';
import { motion } from 'framer-motion';

const Dashboard = (data: IDashboard) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25 }}
      className="min-h-[100vh] w-full bg-[rgb(250,250,250)]"
    >
      <DashboardContainer {...data} />
    </motion.div>
  );
};

export const getStaticProps = async () => {
  const dashboard_data = (await axios.get('http://localhost:7777')).data;

  return {
    props: dashboard_data,
  };
};

export default Dashboard;
