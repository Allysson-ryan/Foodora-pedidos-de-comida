import React from 'react';
import Title from './Title';

const PopularFoods = () => {
  return (
    <section className="max-padd-container py-16">
      <Title
        title1={'Comidas '}
        title2={'Popular'}
        titleStyles={'text-center !pb-20'}
        paraStyles={'!block'}
      />
      {/* container */}
    </section>
  );
};

export default PopularFoods;
