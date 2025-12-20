import React from 'react';
import ComingPopularToy from '../Components/ComingPopularToy';
import PupolarToy from '../Components/PupolarToy';

const PupolarToyLayOut = () => {
  return (
    <div className="grid grid-cols-1">
      <section>
        <ComingPopularToy />
      </section>
      <section>
        <PupolarToy />
      </section>
    </div>
  );
};

export default PupolarToyLayOut;
