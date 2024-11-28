import React from 'react';
import Link from 'next/link';
import Wrapper from './Wrapper';


export default function Cta() {
  return (

    <Wrapper>
      <div className="relative overflow-hidden bg-[var(--maincolor)] rounded-2xl">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:64px_64px]"></div>
        </div>

        {/* Content */}
        <div className="relative px-6 py-16 sm:px-12 md:py-20 md:px-20">
          <div className="flex flex-col items-center gap-8">
            {/* Main Text */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Find your perfect printer today!

              </h2>
              <p className="max-w-2xl mx-auto text-lg text-white/90">
                Your one-stop destination for cutting-edge printers – combining quality, speed, and efficiency for all your printing needs.
              </p>
            </div>

            {/* CTA Button */}
            <Link href="/contact" className="group relative inline-flex items-center justify-center">
              <button className="relative px-8 py-3 bg-white  font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                Contact Us

              </button>
            </Link>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>
        </div>
      </div>
    </Wrapper>

  );
}