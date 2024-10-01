import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
function Footer() {
  return (
    <footer className="bg-[#f7efec]">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-2xl font-bold">BookMyCollab</div>
            <p className="mt-4 max-w-xs text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam molestias.</p>
            <ul className="mt-8 flex gap-6 text-purple-700">
              <li>
                <RiInstagramLine />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <CgMail />
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2">
            <div className="flex flex-col">
              <p className="font-bold text-xl text-gray-900">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-xl text-gray-900">Join us</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Join as a brand
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Join as a Creator
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Find Creator
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#302c2b] p-3 justify-around items-center flex text-white text-sm">
        <p>No Upfront Payment </p>
        <p>Verified Creators</p>
        <p>Inbuilt Messengers</p>
        <p>Secure and Timely Payment</p>
      </div>
      <div className="bg-white py-3 px-5">
        <p className="text-xs text-gray-500">&copy; 2022. Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
