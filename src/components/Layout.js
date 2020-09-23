import React, { useRef } from 'react';
import About from './About';
import './util.css';

const Layout = ({ children }) => {
  const childRef = useRef(null);
  const scrollIntoView = () => {
    childRef.current.scrollIntoView({
      block: 'center',
      inline: 'center',
      behavior: 'smooth',
    });
  };
  return (
    <div className='container'>
      <div>
        <button style={{ cursor: 'pointer' }} onClick={scrollIntoView}>
          Let's roll
        </button>
      </div>

      {children}
      {/*  the child ref wis passed down here */}
      <About ref={childRef} />
    </div>
  );
};

export default Layout;
