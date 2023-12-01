import React from "react";
import Image from "next/image";

const CV = () => {
  return (
    <div className="flex justify-center items-center mt-3 text-black">
      <div className="flex border-2 bg-white  lg:w-7/12">
        <div className="grid grid-cols-4 gap-1 lg:gap-4 w-full">
          <div className="bg-zinc-900 items-start  w-full">
            <Image src={"/Images/profil.png"} width={300} height={300} alt="Proofil" />
          </div>
          <div className="bg-black col-span-3 w-full p-2">
            <div className="grid grid-cols-4 lg:grid-cols-6 gap-5 justify-center items-center">
              <div className="text-white">
                <h1 className="lg:text-xl text-sm font-bold">PROFILE</h1>
              </div>
              <div className="col-span-3 lg:col-span-5 justify-center w-full">
                <div className="bg-white h-1 w-full"></div>
              </div>
            </div>
            <div className="text-normal text-sm lg:text-lg text-white">
              <p className="text-xs mt-2">
                Andrianto is a talented mobile application developer. With his dedication to the world of development, Andrianto has created innovative and highly useful mobile applications. He possesses expertise in various cutting-edge
                technologies, making him one of the leading professionals in the mobile application development industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
