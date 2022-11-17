import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Sidebar from '@components/Sidebar';
import Footer from '@components/Footer';
import SidebarMenu from '@components/ui/buttons/SidebarMenu';
import { useState } from 'react';
import SidebarContext from '@contexts/Sidebar.context';
import { motion } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
  const [visibility, setVisibility] = useState(true);

  const contextValue = {
    setVisibility: setVisibility,
    isVisible: visibility,
  };

  return (
    <div className="overflow-hidden">
      <SidebarContext.Provider value={contextValue}>
        <SidebarMenu />
        <Sidebar />
        <motion.div
          animate={{ x: visibility ? 0 : 300 }}
          transition={{ bounce: 0.5, ease: 'anticipate' }}
        >
          <Component {...pageProps} />
        </motion.div>
      </SidebarContext.Provider>
      <Footer />
    </div>
  );
}
