import { TbMenu } from 'react-icons/tb';
import { useContext } from 'react';
import SidebarContext from '@contexts/Sidebar.context';

const SidebarMenu = () => {
  const { isVisible, setVisibility } = useContext(SidebarContext);

  return (
    <TbMenu
      onClick={() => setVisibility?.(!isVisible)}
      className="absolute z-10 m-8 block h-[32px] w-[32px] cursor-pointer"
    ></TbMenu>
  );
};

export default SidebarMenu;
