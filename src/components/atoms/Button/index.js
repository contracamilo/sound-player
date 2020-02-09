import React from 'react';

export const Button = ({ children, classname, action, aria, disabled }) => {
  return (
    <button
      type={'button'}
      disabled={disabled}
      aria-label={aria}
      className={classname}
      onClick={action}
    >
      <span></span>
      {children}
    </button>
  );
};
