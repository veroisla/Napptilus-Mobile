import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import '../styles/components/BackToHome.scss';

function BackToHome() {
  return (
    <Link to="/">
      <button type="text" className="description__btn__home">
        <HiOutlineArrowNarrowLeft />
        <span className="description__btn__underline hover-underline-animation">
          Back to home
        </span>
      </button>
    </Link>
  );
}

export default BackToHome;
