import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find us on</h2>
      <div>
        <div className="join join-vertical w-full gap-5">
          <button className="btn bg-base-100 justify-start join-item">
            <FaFacebook />
            Facebook
          </button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaTwitter />
            Twitter
          </button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaInstagram />
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
