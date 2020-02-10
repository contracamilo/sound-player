import React from 'react';

/**
 * Functional react component that renders a Button
 * @function Button
 * @param children { Elements } source URL
 * @param classname { string }
 * @param action { function } Set a function that runs on a click event;
 * @param aria { string } gives accessibility features to the button
 * @param disabled { boolean }
 * @returns  {JSX.Element} - Rendered component
 */

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
