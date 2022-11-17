import { Dispatch, SetStateAction } from 'react';

export interface ISidebarContext {
  setVisibility?: Dispatch<SetStateAction<boolean>>;
  isVisible: boolean;
}
