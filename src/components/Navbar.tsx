"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Heart, ShoppingBag, User } from 'lucide-react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <nav className="w-full bg-background border-b border-gray-200 top-0 left-0 right-0 z-50 py-2 md:py-3">
        <div className="container grid grid-cols-12 px-10 md:gap-8 ml-4 md:ml-0">
          <div className="col-span-10 md:col-span-3 flex justify-center md:justify-start">
            <div className="my-auto">
              <Link href="/" className="text-2xl font-bold text-primary">
                <Image src="/logo.png" alt="Logo" width={175} height={175} />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:col-span-7">
            <div className="relative w-full my-auto rounded-md border-4 border-gray-200">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find What Brings You Joy"
                className="w-full px-4 py-3 rounded-md focus:outline-none focus:border-transparent"
              />
              <button
                type="button"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-secondary bg-primary p-[13px] rounded-r-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden col-span-2 md:col-span-2 md:flex justify-end">
            <div className='my-auto flex gap-4'>
              <Heart className='w-5 h-5 stroke-1 hover:text-primary cursor-pointer' />
              <ShoppingBag className='w-5 h-5 stroke-1 hover:text-primary cursor-pointer' />
              <div className='flex'>
                <span className='hover:text-primary cursor-pointer'>Join</span>/<span className='hover:text-primary cursor-pointer'>Login</span>
              </div>
            </div>
          </div>
          <div className="flex col-span-2 md:col-span-2 md:hidden justify-end">
            <div className='my-auto'>
              <User className='w-5 h-5' />
            </div>
          </div>
        </div>
      </nav>
      <div className='w-full px-4 py-2'>
        <div className="flex md:hidden relative w-full my-auto rounded-md border-4 border-gray-200">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Find What Brings You Joy"
            className="w-full px-4 py-3 rounded-md focus:outline-none focus:border-transparent"
          />
          <button
            type="button"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-secondary bg-primary p-[13px] rounded-r-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 