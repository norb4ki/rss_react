import { useState } from 'react';

const ErrorButton = () => {
  const [hasError, setHasError] = useState<boolean>(false);
  const handleClick = () => {
    setHasError(true);
  };

  if (hasError) {
    throw new Error('I crashed!');
  }

  return <button onClick={handleClick}>Throw Error</button>;
};

export default ErrorButton;
