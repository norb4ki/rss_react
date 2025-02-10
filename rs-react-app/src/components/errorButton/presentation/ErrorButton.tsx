import React, { PropsWithChildren, ReactNode, useState } from 'react';

const ErrorButton: React.FC<PropsWithChildren> = ({ children }): ReactNode => {
  const [hasError, setHasError] = useState<boolean>(false);
  const handleClick = () => {
    setHasError(true);
  };

  if (hasError) {
    throw new Error('I crashed!');
  }

  return <button onClick={handleClick}>{children || 'Throw Error'}</button>;
};

export default ErrorButton;
