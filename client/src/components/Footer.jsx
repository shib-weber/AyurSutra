export default function Footer() {
  return (
    <footer className="bg-[#022424] py-12 text-gray-300">
      <div className="container mx-auto px-4  ">
        <div className="lg:ml-23 grid grid-cols-2 gap-10 md:grid-cols-4  lg:grid-cols-4 ">
          {/* Logo + description */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 text-white">
            <img className="w-20 h-10" src="logo.png" alt="" />
              <h2 className="text-2xl font-bold tracking-tight">AyurSutra</h2>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Transforming Ayurveda with Technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white">Quick Links</h3>
            <ul className="  mt-4 space-y-3">
              <li>
                <a className="text-gray-400 hover:text-white" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="text-gray-400">info@ayursutra.com</li>
              <li className="text-gray-400">+1 234 567 890</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-white">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              {/* Facebook */}
              <a className="text-gray-400 hover:text-white" href="#">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 
                    1.492-3.89 3.777-3.89 1.094 0 2.238.195 
                    2.238.195v2.46h-1.26c-1.243 
                    0-1.63.771-1.63 1.562V12h2.773l-.443 
                    2.89h-2.33v6.988C18.343 21.128 
                    22 16.991 22 12z"
                    fillRule="evenodd"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a className="text-gray-400 hover:text-white" href="#">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 
                    3.808.06 1.064.049 1.791.218 
                    2.427.465a4.902 4.902 0 011.772 
                    1.153 4.902 4.902 0 011.153 
                    1.772c.247.636.416 1.363.465 
                    2.427.048 1.024.06 1.378.06 
                    3.808s-.012 2.784-.06 
                    3.808c-.049 1.064-.218 
                    1.791-.465 2.427a4.902 4.902 0 
                    01-1.153 1.772 4.902 4.902 0 
                    01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.095 2.525c.636-.247 1.363-.416 
                    2.427-.465C9.53 2.013 9.884 2 
                    12.315 2zM12 7a5 5 0 100 10 
                    5 5 0 000-10zm0 8a3 3 0 
                    110-6 3 3 0 010 6zm5.25-9.75a1.25 
                    1.25 0 100 2.5 1.25 1.25 
                    0 000-2.5z"
                    fillRule="evenodd"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a className="text-gray-400 hover:text-white" href="#">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 
                  0-5 2.239-5 5v14c0 2.761 
                  2.239 5 5 5h14c2.762 0 
                  5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 
                  19h-3v-11h3v11zm-1.5-12.268c-.966 
                  0-1.75-.79-1.75-1.764s.784-1.764 
                  1.75-1.764 1.75.79 1.75 
                  1.764-.783 1.764-1.75 
                  1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 
                  0v5.604h-3v-11h3v1.765c1.396-2.586 
                  7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>© 2024 AyurSutra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
