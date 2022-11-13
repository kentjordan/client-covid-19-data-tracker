import { TbMenu } from 'react-icons/tb';
import { useContext } from 'react';
import SidebarContext from '@contexts/Sidebar.context';

const SidebarMenu = () => {

    const { menuVisibility: { isVisible, setVisibility } } = useContext(SidebarContext);

    return <TbMenu onClick={() => setVisibility?.(!isVisible)} className="h-[32px] w-[32px] absolute m-8 z-10 cursor-pointer block" ></TbMenu>
};

export default SidebarMenu;
