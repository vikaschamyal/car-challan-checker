import React from "react";
import { FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-10 w-full">
      <div className="max-w-5xl mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; 2025 Car Challan Checker. All rights reserved.</p>

        <div className="flex gap-4">
          <a
            href="https://github.com/vikaschamyal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1"
          >
            <FaGithub /> GitHub
          </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
