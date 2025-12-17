import React from 'react';

const ToyGalaxyLogo = () => {
  const logoText = [
    { char: 'T', color: 'text-[#E91E63]' },
    { char: 'O', color: 'text-[#FF9800]' },
    { char: 'Y', color: 'text-[#FF9800]' },
    { char: ' ', color: '' },
    { char: 'G', color: 'text-[#673AB7]' },
    { char: 'A', color: 'text-[#673AB7]' },
    { char: 'L', color: 'text-[#8BC34A]' },
    { char: 'A', color: 'text-[#FF9800]' },
    { char: 'X', color: 'text-[#673AB7]' },
    { char: 'Y', color: 'text-[#03A9F4]' },
  ];

  return (
    <div className="flex flex-col items-center justify-center font-sans">
      <div className="flex items-baseline font-black text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight">
        {logoText.map((item, index) => (
          <span
            key={index}
            className={`${item.color} transition-all duration-300 hover:-translate-y-2 hover:scale-110 cursor-default inline-block`}
            style={{ filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.05))' }}
          >
            {item.char === ' ' ? '\u00A0' : item.char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ToyGalaxyLogo;
