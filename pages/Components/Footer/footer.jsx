import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


const Footer = () => {
  return (
    <div className="border-t-4 border-white  w-full mt-2">
      <div className="flex flex-col lg:flex-row justify-center items-center text-center pt-5 pb-5">
        <div className="w-full">
          <h1>2023 © All Rights Reserved.</h1>
        </div>
        <div className="w-full">
          <h1>
            Built with{" "}
            <span>
              <FontAwesomeIcon icon={faHeart} className="me-1 text-red-600" />
              by
            </span>{" "}
            <link href={""}>CodeAnd</link>{" "}
          </h1>
        </div>
        <div className="w-full">
          <Link href={""}>I Hallo</Link>
        </div>
      </div>
    </div>
  );
};
