const Footer = () => {
  return (
    <>
      <footer className="bg-white  shadow dark:bg-gray-900 mt-12">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://Netflix.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-vintage-cinematic-movie-camera-animation-emblem-illustration-vector-clipart-png-image_12237384.png"
                className="h-8 scale-150"
                alt="Netflix Logo"
              />
               <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-red-700 ">
               MovieVerse
            </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://Netflix.com/" className="hover:underline">
              Netflix™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};
export default Footer;
