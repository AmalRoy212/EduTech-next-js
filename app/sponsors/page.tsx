"use client";

import React, { useState } from "react";

const SponsorEnquiryForm = () => {
  return (
    <div className="min-h-screen p-6 flex items-center justify-center mb-16">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          {/* <h2 className="font-semibold text-xl text-gray-600">Responsive Form</h2>
      <p className="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p> */}

          <div className="bg-slate-300 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              {/* <div className="text-gray-600">
            <p className="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div> */}

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5 flex md:gap-x-5 flex-col md:flex-row">
                    <div className="md:w-1/2 w-full">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                      />
                    </div>
                    <div className="md:w-1/2 w-full">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                      />
                    </div>
                  </div>

                  <div className="md:col-span-5">
                    <label>Email Address</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="email@domain.com"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label>Address / Street</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder=""
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder=""
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label>Country / region</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="country"
                        id="country"
                        placeholder="Country"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value=""
                      />
                      <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label>State / province</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="state"
                        id="state"
                        placeholder="State"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value=""
                      />
                      <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <label>Zipcode</label>
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                      value=""
                    />
                  </div>

                  <div className="md:col-span-5">
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="billing_same"
                        id="billing_same"
                        className="form-checkbox"
                      />
                      <label className="ml-2">
                        My billing address is different than above.
                      </label>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label>How many soda pops?</label>
                    <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <button className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mx-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                      <input
                        name="soda"
                        id="soda"
                        placeholder="0"
                        className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value="0"
                      />
                      <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mx-2 fill-current"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://www.buymeacoffee.com/dgauderman"
          target="_blank"
          className="md:absolute bottom-0 right-0 p-4 float-right"
        >
          <img
            src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
            alt="Buy Me A Coffee"
            className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
          />
        </a>
      </div>
    </div>
  );
};

export default SponsorEnquiryForm;
