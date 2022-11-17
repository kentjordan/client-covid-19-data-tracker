import React from 'react';

const Footer = () => {
  return (
    <div className="absolute flex h-24 w-full flex-col items-center justify-center bg-stone-900 text-white">
      <h1 className="text-lg font-bold">Made by Kent Jordan</h1>
      <p className="mt-1 text-xs text-stone-400">
        Built on top of Next, Express & Typescript
      </p>
    </div>
  );
};

export default Footer;
