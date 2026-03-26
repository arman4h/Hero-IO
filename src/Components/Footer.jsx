import React from 'react'
import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <footer className="bg-[#001931] py-10">
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-white">
        <div className="sm:col-span-2 lg:col-span-4 space-y-4">
          <div className="flex items-center justify-center sm:justify-start gap-1">
            <img alt="" className="w-8" src={logo} />
            <h2 className="text-xl font-semibold">Hero Apps</h2>
          </div>
          <p className="text-gray-300 text-sm leading-6 text-center sm:text-left">
            HERO.IO builds practical mobile apps that help people stay productive,
            organized, and connected. We focus on clean design, useful features,
            and reliable performance for everyday use.
          </p>
        </div>

        <div className="lg:col-span-2 space-y-4 text-center sm:text-left">
          <h2 className=" font-semibold">Company</h2>
          <ul className="text-gray-400 space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="lg:col-span-2 space-y-4 text-center sm:text-left">
          <h2 className=" font-semibold">Resources</h2>
          <ul className="text-gray-400 space-y-2">
            <li>Documentation</li>
            <li>Developer API</li>
            <li>Community</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className="lg:col-span-2 space-y-4 text-center sm:text-left">
          <h2 className=" font-semibold">Social Icons</h2>
          <ul className="text-white flex justify-center sm:justify-start gap-4 text-xl">
            <li>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path>
              </svg>
            </li>
            <li>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"></path>
              </svg>
            </li>
            <li>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
              </svg>
            </li>
            <li>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM11 2.5c0-0.275 0.225-0.5 0.5-0.5h2c0.275 0 0.5 0.225 0.5 0.5v2c0 0.275-0.225 0.5-0.5 0.5h-2c-0.275 0-0.5-0.225-0.5-0.5v-2zM8 5c1.656 0 3 1.344 3 3s-1.344 3-3 3c-1.656 0-3-1.344-3-3s1.344-3 3-3zM14 13.5v0c0 0.275-0.225 0.5-0.5 0.5h-11c-0.275 0-0.5-0.225-0.5-0.5v0-6.5h1.1c-0.066 0.322-0.1 0.656-0.1 1 0 2.762 2.237 5 5 5s5-2.238 5-5c0-0.344-0.034-0.678-0.1-1h1.1v6.5z"></path>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
