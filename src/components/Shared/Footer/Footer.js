import React from "react";
import WhatsApp from "../../WhatsApp/WhatsApp";

const Footer = () => {
  return (
    <div>
      <footer class="footer-1 mt-10 bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-white py-8 sm:py-12">
        <div class="container mx-auto px-4 text-white">
          <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 class="text-xl font-bold mb-6">TRISHAL MEDICAL CENTER</h5>
              <ul class="list-none footer-links">
                <li class="mb-2">
                  <span
                    href="#"
                    class="text-xl border-b border-solid border-transparent hover:border-[#E83133] hover:text-[#E83133]"
                  >
                    Get Us
                  </span>
                </li>
                <li class="mb-2">
                  <span
                    href="#"
                    class="border-b border-solid border-transparent hover:border-[#E83133] hover:text-[#E83133]"
                  >
                    House 11, Road 108, Gulshan 2, Dhaka, Bangladesh. 1212.
                  </span>
                </li>
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 class="text-xl font-bold mb-6">Useful Links</h5>
              <ul class="list-none footer-links  ">
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Cool stuff
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Random feature
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Team feature
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Stuff for developers
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Another one
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            {/* <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
        <h5 class="text-xl font-bold mb-6">Resources</h5>
        <ul class="list-none footer-links">
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource name</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another resource</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Final resource</a>
          </li>
        </ul>
      </div> */}
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 class="text-xl font-bold mb-6">About</h5>
              <ul class="list-none footer-links">
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Team
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Locations
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Privacy
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 class="text-xl font-bold mb-6">Help</h5>
              <ul class="list-none footer-links">
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Support
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Help Center
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

           
    
        </div>
      </footer>
      <WhatsApp></WhatsApp>
    </div>
  );
};

export default Footer;
