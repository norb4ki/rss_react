import React, { PropsWithChildren } from 'react';

const NotFoundPage: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <h1>404 Not Found</h1>
      {children}
    </div>
  );
};

export default NotFoundPage;
