import React from "react";
import { Icons } from "./icons";

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 dark:bg-gray-800 mt-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icons.orbit className="w-6 h-6" />
              <span className="text-md font-semibold">Luiz Carneiro</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Maybe I will add some messge here
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/carneirodotdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Icons.twitter className="w-6 h-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:-translate-y-1 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
