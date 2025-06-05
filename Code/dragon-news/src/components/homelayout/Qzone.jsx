import React from 'react';
import swiming from '../../assets/swimming.png';
import classImg from '../../assets/class.png';
import playImg from '../../assets/playground.png';

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">Qzone</h2>
      <div className="space-y-5">
        <img src={swiming} alt="" />
        <img src={classImg} alt="" />
        <img src={playImg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
