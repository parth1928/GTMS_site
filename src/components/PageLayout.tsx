import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className = '' }) => {
  return (
    <>
      <Header />
      <div className={`min-h-screen bg-black ${className}`}>
        {/* This div creates space for the fixed header */}
        <div className="h-16 sm:h-20 md:h-24" aria-hidden="true" />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
