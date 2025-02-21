import React, { forwardRef } from 'react';

const Page = forwardRef(({ children, number }, ref) => {
  return (
    <div className="demoPage bg-white h-full" ref={ref}>
      <div className="h-full">{children}</div>
      <p className="text-xs text-end text-black pb-4">
        Page number: {number}
      </p>
    </div>
  );
});

export default Page;

