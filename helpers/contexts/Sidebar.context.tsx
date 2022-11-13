import { createContext } from 'react';
import { ISidebarContext } from './interfaces/ISidebar'

const SidebarContext = createContext<ISidebarContext>({
    menuVisibility: {
        isVisible: false,
    }
});

export {
    SidebarContext as default,

}
