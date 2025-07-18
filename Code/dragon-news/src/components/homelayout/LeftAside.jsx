import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      ></Suspense>
      <Categories />
    </div>
  );
};

export default LeftAside;
