import React, { useEffect } from 'react';
import IconCovid from '@assets/icons/ic_covid.svg';
import IconDashboard from '@assets/icons/ic_dashboard.svg';
import IconCountries from '@assets/icons/ic_countries.svg';
import IconFAQs from '@assets/icons/ic_faqs.svg';
import Image from 'next/image';
import Link from 'next/link';

import { useContext } from 'react';

import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import { motion } from 'framer-motion';
import SidebarContext from '@contexts/Sidebar.context';

const Sidebar = () => {
  const { isVisible, setVisibility } = useContext(SidebarContext);

  const closeSidebar = () => setVisibility?.(!isVisible);

  return (
    <motion.div
      initial={{ x: -380 }}
      animate={{ x: isVisible ? -380 : 0 }}
      transition={{ bounce: 0.5, ease: 'anticipate' }}
      id="sidebar"
      className={`fixed z-10 flex h-full min-w-[300px] flex-col items-center justify-between border-r-[2px] bg-white py-12`}
    >
      <div className="">
        <div className="flex items-center justify-center ">
          <Image
            className="m-2"
            src={IconCovid}
            width={38}
            alt="COVID-19 Icon"
          />
          <h1 className="m-2 text-lg font-bold">COVID-19 TRACKER</h1>
        </div>

        <div className="mt-24">
          <ul>
            <li>
              <Link
                onClick={closeSidebar}
                href="/dashboard"
                className="mt-2 flex items-center p-2 text-base hover:cursor-pointer hover:rounded-md hover:bg-white hover:invert"
              >
                <Image
                  className="m-2"
                  src={IconDashboard}
                  width={32}
                  alt="Dashboard"
                />
                <h1 className="m-2 ">International</h1>
              </Link>
            </li>
            <li>
              <Link
                onClick={closeSidebar}
                href="/countries"
                className="mt-2 flex items-center p-2 text-base hover:cursor-pointer hover:rounded-md hover:bg-white hover:invert"
              >
                <Image
                  className="m-2"
                  src={IconCountries}
                  width={32}
                  alt="Dashboard"
                />
                <h1 className="m-2">Countries</h1>
              </Link>
            </li>
            <li>
              <Link
                onClick={closeSidebar}
                href="faqs"
                className="mt-2 flex items-center p-2 text-base hover:cursor-pointer hover:rounded-md hover:bg-white hover:invert"
              >
                <Image
                  className="m-2"
                  src={IconFAQs}
                  width={32}
                  alt="Dashboard"
                />
                <h1 className="m-2">F.A.Qs</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="h-auto w-auto">
        <div>
          <Link
            href={''}
            onClick={closeSidebar}
            className="mt-2 flex items-center p-2 text-base hover:cursor-pointer hover:rounded-md hover:bg-white hover:invert"
          >
            {/* <Image className="m-2" src={MdOutlineArrowBackIosNew} width={32} alt='Dashboard' /> */}
            <MdOutlineArrowBackIosNew />
            <h1 className="m-2 ">CLOSE</h1>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
