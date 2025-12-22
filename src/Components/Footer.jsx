import React from 'react';

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHeart,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import ToyGalaxyLogo from '../ToyGalaxyLogo/ToyGalaxyLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-8 border-[#FFC107] pt-10 pb-8 px-4 sm:px-8 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="flex flex-col items-center sm:items-start space-y-5 text-center sm:text-left">
            <div className="">
              <ToyGalaxyLogo></ToyGalaxyLogo>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              আমরা দিচ্ছি প্রিমিয়াম কোয়ালিটির খেলনা যা আপনার সন্তানের
              সৃজনশীলতা বাড়াতে সাহায্য করবে। নিরাপদ এবং আনন্দদায়ক শৈশবের সঙ্গী
              Toy Galaxy।
            </p>
            <div className="flex space-x-3">
              <SocialIcon
                href="#"
                icon={<FaFacebookF size={18} />}
                color="bg-blue-500"
              />
              <SocialIcon
                href="#"
                icon={<FaInstagram size={18} />}
                color="bg-pink-500"
              />
              <SocialIcon
                href="#"
                icon={<FaTwitter size={18} />}
                color="bg-sky-400"
              />
              <SocialIcon
                href="#"
                icon={<FaYoutube size={18} />}
                color="bg-red-600"
              />
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-gray-800 mb-6 relative inline-block">
              প্রয়োজনীয় লিংক
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-pink-400 rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li>
                <FooterLink href="#" lineColor="bg-pink-400">
                  আমাদের গল্প
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#" lineColor="bg-pink-400">
                  নতুন খেলনা
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#" lineColor="bg-pink-400">
                  বেস্ট সেলার
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#" lineColor="bg-pink-400">
                  অফার জোন
                </FooterLink>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-gray-800 mb-6 relative inline-block">
              সহযোগিতা
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-400 rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li>
                <FooterLink href="#" lineColor="bg-blue-400">
                  Terms & Conditions
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#" lineColor="bg-blue-400">
                  Privacy Policy
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#" lineColor="bg-blue-400">
                  Return & Refund
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#" lineColor="bg-blue-400">
                  Track Order
                </FooterLink>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-gray-800 mb-6 relative inline-block">
              যোগাযোগ করুন
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-green-400 rounded-full"></span>
            </h3>
            <div className="space-y-4 text-sm text-gray-600 font-medium">
              <div className="flex items-center justify-center sm:justify-start gap-3 hover:text-gray-900 transition-colors">
                <FaMapMarkerAlt className="text-[#8BC34A] text-lg" />
                <span>বনানী, ঢাকা-১২১৩, বাংলাদেশ</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 hover:text-gray-900 transition-colors">
                <FaPhoneAlt className="text-[#03A9F4]" />
                <span>+৮৮০ ১৭১২-৩৪৫৬৭৮</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 hover:text-gray-900 transition-colors">
                <MdEmail className="text-[#E91E63] text-xl" />
                <span>hello@toygalaxy.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 flex justify-center flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
          <p>
            © {currentYear}{' '}
            <span className="font-bold text-gray-600 uppercase">
              TOY GALAXY LTD.
            </span>{' '}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon, color }) => (
  <a
    href={href}
    className={`${color} text-white p-2.5 rounded-xl hover:scale-110 hover:rotate-6 transition-all shadow-md inline-flex items-center justify-center`}
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children, lineColor = 'bg-gray-400' }) => (
  <a
    href={href}
    className="group relative text-gray-600 hover:text-gray-900 transition-colors duration-300 inline-block pb-1"
  >
    {children}
    <span
      className={`absolute bottom-0 left-0 w-0 h-0.5 ${lineColor} transition-all duration-300 group-hover:w-full`}
    ></span>
  </a>
);

export default Footer;
