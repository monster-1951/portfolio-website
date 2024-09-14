'use client'
import React from "react";
import MySocialHandles from "./MySocialHandles";

const Footer = () => {
  return (
      <div className="px-3 glass flex justify-between sm:hidde lg:flex sticky bottom-0">
        <p className="my-auto text-base sm:text-xl font-semibold">Follow me on social media :</p>
        <MySocialHandles AboutPage style="flex justify-center" />
      </div>
    
  );
};

export default Footer;
