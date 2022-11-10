import React, { useEffect } from 'react';
import { useModal } from '@faceless-ui/modal';

const CloseModalOnRoute: React.FC = () => {
  const { closeAll } = useModal();

  useEffect(() => {
    closeAll();
  }, [closeAll]);

  return null;
}

export default CloseModalOnRoute
