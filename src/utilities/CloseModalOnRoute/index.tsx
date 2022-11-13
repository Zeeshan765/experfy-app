import React, { useEffect } from 'react';
import { useModal } from '@faceless-ui/modal';

const CloseModalOnRoute: React.FC = () => {
  const { closeAllModals } = useModal();

  useEffect(() => {
    closeAllModals();
  }, [closeAllModals]);

  return null;
}

export default CloseModalOnRoute
