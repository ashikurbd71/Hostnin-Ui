import React from "react";
import google from "@/assets/google-logo.svg";
import Image from "next/image";

import user1 from "@/assets/r-4.png";
import user2 from "@/assets/r-2.png";
import user3 from "@/assets/r-5.png";
import arrow from "@/assets/arrow-dark.webp";

const HappyCustomer = () => {
  return (
    <div className="pb-5">
      <div className="flex flex-col items-center justify-center gap-8 py-5 mx-auto lg:flex-row lg:gap-8 md:pb-5 max-w-7xl">
        <div className="relative flex flex-col items-start w-full lg:flex-1">
          <div className="absolute block z-10 left-10 top-40 sm:top-48 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[360px] lg:w-[450px] lg:h-[450px] h-96 sm:h-[360px] bg-gray-100 rounded-full"></div>

          <div className="z-20">
            {/* Google Logo */}
            <div className="flex items-center mt-6 mb-2 sm:mt-10">
              <Image src={google} alt="Google Logo" width={120} height={40} />
            </div>

            {/* Stars */}
            <div className="flex items-center mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 sm:w-6 sm:h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path
                      d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 
                    0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 
                    134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 
                    3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 
                    118 84.1c2.8 2 6.7 3.6 10 
                    3.6 3.4 0 6.1-1.7 8.9-3.9 
                    5.6-4.2 7.8-11.4 
                    5.5-18L352 307.2l119.9-86 
                    2.9-2.5c2.6-2.8 5.2-6.6 
                    5.2-10.7 0-8.8-8.2-16-17-16z"
                    ></path>
                  </svg>
                ))}
            </div>

            {/* Text */}
            <div className="mb-3 text-base font-medium text-gray-700 sm:mb-4 sm:font-semibold sm:text-lg">
              4.8 out of 5 based on 147+ reviews.
            </div>

            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#03206B] mb-2 leading-tight">
              Hear from our <br /> happy customers
            </h2>
            <p className="max-w-md mb-4 text-base text-gray-500 sm:mb-6 sm:text-base">
              Getting positive reviews from hundreds of clients means a lot to
              us. We care about every feedback and adjust our services
              accordingly.
            </p>
          </div>

          {/* User Avatars */}
          <div className="flex items-center gap-7">
            <div className="flex -space-x-4 ">
              <Image
                src={user1}
                alt="User 1"
                width={44}
                height={44}
                className="z-30 object-cover border-2 border-white rounded-full"
              />
              <Image
                src={user2}
                alt="User 2"
                width={44}
                height={44}
                className="z-20 object-cover border-2 border-white rounded-full"
              />
              <Image
                src={user3}
                alt="User 3"
                width={44}
                height={44}
                className="z-10 object-cover border-2 border-white rounded-full"
              />
            </div>
            <div className="z-20 ml-4 text-[#2B4EFF] text-sm sm:text-base font-medium cursor-pointer flex items-center">
              <Image
                src={arrow}
                alt="User 3"
                width={44}
                height={44}
                className="z-20 object-cover mr-3"
              />
              <span>More Review</span>
            </div>
          </div>
        </div>
        
        <div className="">
          
        </div>
      </div>
    </div>
  );
};

export default HappyCustomer;
