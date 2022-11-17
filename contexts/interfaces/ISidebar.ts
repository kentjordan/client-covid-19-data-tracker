import { Dispatch, SetStateAction } from 'react';

export interface ISidebarContext {
    menuVisibility: {
        setVisibility?: Dispatch<SetStateAction<boolean>>
        isVisible: boolean,
    }
}
