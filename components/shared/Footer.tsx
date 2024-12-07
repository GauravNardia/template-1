import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white py-8 border-t bottom-0 mt-40 border-gray-200">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo / Branding */}
          <div className="text-lg font-semibold text-gray-800">
            Gaurav Nardia
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <Link
              href="https://x.com/gaurav_nardia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Image src="/assets/x.svg" width={30} height={30} alt="x" />
            </Link>
            <Link
              href="https://www.instagram.com/gauravnardia07/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <Image src="/assets/instagram.svg" width={30} height={30} alt="instagram" />
              </Link>
            <Link
              href="https://www.linkedin.com/in/gauravnardia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Image src="/assets/linkedin.svg" width={30} height={30} alt="linkedin" />
              </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} GauravNardia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
