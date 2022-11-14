import React, { useEffect } from "react";
import IconCovid from '@assets/icons/ic_covid.svg'
import IconDashboard from '@assets/icons/ic_dashboard.svg'
import IconCountries from '@assets/icons/ic_countries.svg'
import IconFAQs from '@assets/icons/ic_faqs.svg'
import Image from 'next/image'
import Link from "next/link";

import { useContext } from "react";

import { MdOutlineArrowBackIosNew } from 'react-icons/md'

import { motion } from 'framer-motion';
import SidebarContext from "@contexts/Sidebar.context";

const Sidebar = () => {

  const { menuVisibility: { isVisible, setVisibility } } = useContext(SidebarContext);

  const closeSidebar = () => setVisibility?.(!isVisible);

  useEffect(() => {
    console.log('isClosed? ', isVisible);
  });

  return <motion.div initial={{ x: -300 }} animate={{ x: isVisible ? -300 : 0 }} transition={{ bounce: 0.5, ease: 'anticipate' }} id='sidebar' className={`bg-white h-full min-w-[300px] flex-col flex fixed z-10 justify-between items-center py-12 border-r-[2px]`}>

    <div className="">
      <div className="flex justify-center items-center ">
        <Image className="m-2" src={IconCovid} width={38} alt='COVID-19 Icon' />
        <h1 className="font-bold m-2 text-lg">COVID-19 TRACKER</h1>
      </div>

      <div className="mt-24">
        <ul>
          <li >
            <Link onClick={closeSidebar} href='/dashboard' className="mt-2 p-2 text-base flex items-center hover:invert hover:bg-white hover:rounded-md hover:cursor-pointer">
              <Image className="m-2" src={IconDashboard} width={32} alt='Dashboard' />
              <h1 className="m-2 ">International</h1></Link>
          </li>
          <li >
            <Link onClick={closeSidebar} href='/countries' className="mt-2 p-2 text-base flex items-center hover:invert hover:bg-white hover:rounded-md hover:cursor-pointer">
              <Image className="m-2" src={IconCountries} width={32} alt='Dashboard' />
              <h1 className="m-2">Countries</h1>
            </Link>
          </li>
          <li >
            <Link onClick={closeSidebar} href='faqs' className="mt-2 p-2 text-base flex items-center hover:invert hover:bg-white hover:rounded-md hover:cursor-pointer">
              <Image className="m-2" src={IconFAQs} width={32} alt='Dashboard' />
              <h1 className="m-2">F.A.Qs</h1>
            </Link>
          </li>
        </ul>
      </div>
    </div>

    <div className="h-auto w-auto">
      <div>
        <Link href={''} onClick={closeSidebar} className="mt-2 p-2 text-base flex items-center hover:invert hover:bg-white hover:rounded-md hover:cursor-pointer">
          {/* <Image className="m-2" src={MdOutlineArrowBackIosNew} width={32} alt='Dashboard' /> */}
          <MdOutlineArrowBackIosNew />
          <h1 className="m-2 ">CLOSE</h1></Link>
      </div>
    </div>
  </motion.div>;
};

export default Sidebar;
