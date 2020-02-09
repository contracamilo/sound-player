import React from 'react';

export const Button = ({ children, classname, action, aria }) => {
  return (
    <button type={'button'} aria-label={aria} className={classname} onClick={action}>
      <span></span>
      {children}
    </button>
  );
};
