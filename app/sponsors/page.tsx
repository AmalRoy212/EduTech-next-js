"use client"

import React, { useState } from 'react';

const SponsorEnquiryForm = () => {
  
  return (
    <section>
      <div className='w-full min-h-screen h-auto px-10 mt-10 z-10'>
        <div className='w-full flex md:flex-row flex-col gap-4 justify-center items-center h-auto'>
        <div className="">
    <label  className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your name</label>
    <input type="text" id="username-success" className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 " placeholder="Bonnie Green"/>
    <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p>
  </div>
  <div>
    <label className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Your name</label>
    <input type="text" id="username-error" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" placeholder="Bonnie Green"/>
    <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops!</span> Username already taken!</p>
  </div>

        </div>
      </div>
    </section>
  );
};

export default SponsorEnquiryForm;
