import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="w-full bg-white p-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <a
                href="#"
                className="font-normal text-blue-gray-500 transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About us
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
