import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-20 w-full h-20 backdrop-blur-lg bg-primary/40 shadow-sm">
      <div className="mx-auto max-w-8xl px-6 flex items-center h-full">
        <a href="/" className="text-2xl font-bold text-primary-dark hover:text-primary transition-colors">
          SilentSpeechRecognition
        </a>

        <nav className='space-x-8 ml-auto'>
          <a href='#home' className='text-primary-dark hover:text-primary transition-colors font-semibold text-[1.2rem]'>Home</a>
          <a href='#about' className='text-primary-dark hover:text-primary transition-colors font-semibold text-[1.2rem]'>About</a>
          <a href='#contact' className='text-primary-dark hover:text-primary transition-colors font-semibold text-[1.2rem]'>Features</a>
          <a href='#demo' className='text-primary-dark hover:text-primary transition-colors font-semibold text-[1.2rem]'>Demo</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;