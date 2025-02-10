import {
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  useState,
} from 'react';

const ErrorButton: FunctionComponent<PropsWithChildren> = ({
  children,
}): ReactNode => {
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
