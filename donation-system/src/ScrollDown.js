import React from 'react';

function ScrollButton() {
  const scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button onClick={scrollDown}>Scroll to Bottom</button>
  );
}

export default ScrollButton;
