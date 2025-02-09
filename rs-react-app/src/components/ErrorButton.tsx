const ErrorButton = () => {
  const handleClick = () => {
    throw new Error('This is a test error!');
  };

  return <button onClick={handleClick}>Throw Error</button>;
};

export default ErrorButton;
