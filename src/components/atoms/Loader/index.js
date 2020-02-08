import React from 'react';

/**
 * Functional react component that render a circular loader
 * @function Loader
 * @returns  {JSX.Element} - Rendered component
 */

const Loader = () => {
  return (
    <div data-test="loader-component" className="lds-ripple">
      <div />
      <div />
    </div>
  );
};

export default Loader;
