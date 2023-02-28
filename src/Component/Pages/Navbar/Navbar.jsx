import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useProvider } from "../../Context/Context_provider";
import logo from "../../image/logo-products.webp";
import "./navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const { currentUser, signOutUser } = useProvider();
  const [scroll_counter, setScroll_counter] = useState(0);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  //sign out handlar
  const signOutHandlar = () => {
    signOutUser()
      .then(() => {
        toast.success("log out successfull");
        navigate("/signin");
      })
      .catch((e) => toast.error(e.message));
  };

  //scroll navbar

  window.onscroll = () => {
    const scroll_nmb = window.scrollY;

    if (scroll_nmb >= 100) {
      setScroll_counter(scroll_nmb);

      setTimeout(() => {
        setScroll_counter(0);
      }, 1000);
    } else {
      setScroll_counter(scroll_nmb);
    }
  };

  // reload handlar will call after click the list items
  const reloadHandlar = () => {
    // setCount(count + 1);
    window.location.reload();
  };

  return (
    <div
      className={
        scroll_counter >= 100
          ? "custom  fixed w-full z-40"
          : "fixed w-full z-40 custom2"
      }
    >
      <nav className="relative ">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between ">
            <a href="#">
              <img className="w-[100%] object-cover" src={logo} alt="" />
            </a>

            {/* <!-- Mobile menu button --> */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setToggle(!toggle)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {toggle ? (
                  <svg
                    x-show="!isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#273c75]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    x-show="isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden"
        x-cloak :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" hidden md:block transition-all --> */}
          <div
            className={
              toggle
                ? "hidden md:block"
                : "" +
                  "absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
            }
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              {/* home */}
              <div
                onClick={() => reloadHandlar()}
                className="flex items-center gap-x-2 hover:bg-[#f3f3f5] transition-all px-1 py-2"
              >
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 md:hidden block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </span>
                <Link
                  to="/"
                  className="my-2 text-[#273c75] transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 font-semibold"
                >
                  Home
                </Link>
              </div>
              {/* review */}
              {currentUser?.uid && (
                <div
                  onClick={() => reloadHandlar()}
                  className="flex items-center gap-x-2 hover:bg-[#f3f3f5] transition-all px-1 py-2"
                >
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 md:hidden block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </span>
                  <Link
                    to="/review"
                    className="my-2 text-[#273c75] transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 font-semibold"
                  >
                    Review
                  </Link>
                </div>
              )}

              {/* service */}
              <div
                onClick={() => reloadHandlar()}
                className="flex items-center gap-x-2 hover:bg-[#f3f3f5] transition-all px-1 py-2"
              >
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 md:hidden block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                  </svg>
                </span>
                <Link
                  to="/service"
                  className="my-2 text-[#273c75] transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 font-semibold"
                >
                  Service
                </Link>
              </div>
              {/* blog */}
              <div
                onClick={() => reloadHandlar()}
                className="flex items-center gap-x-2 hover:bg-[#f3f3f5] transition-all px-1 py-2"
              >
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 md:hidden block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                </span>
                <Link
                  to="/blog"
                  className="my-2 text-[#273c75] transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 font-semibold"
                >
                  Blog
                </Link>
              </div>
              {/* contact */}
              <div
                onClick={() => reloadHandlar()}
                className="flex items-center gap-x-2 hover:bg-[#f3f3f5] transition-all px-1 py-2"
              >
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 md:hidden block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                </span>
                <Link
                  to="/contact"
                  className="my-2 text-[#273c75] transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 font-semibold"
                >
                  Contact
                </Link>
              </div>

              {/* shop cout icon */}
              <div
                onClick={() => reloadHandlar()}
                className="flex items-center md:justify-center p-2 gap-2 relative hover:bg-[#f3f3f5] transition-all md:hover:bg-none mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span className="md:hidden block">Shop</span>
                <span className="w-4 h-4 rounded-full bg-[#e84393] text-white text-[10px] text-center absolute top-0 left-[18px]">
                  10
                </span>
              </div>

              {/* login & logout */}

              {/* sign out */}
              {currentUser?.uid ? (
                <div className="flex items-center bg-[#DBE6F4] transition-all px-2 rounded-sm md:px-4 gap-2">
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                  </span>
                  <button
                    onClick={() => signOutHandlar()}
                    className="my-2 text-[#273c75] transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 "
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <div className="flex items-center bg-[#DBE6F4] transition-all px-2 rounded-sm md:px-4 gap-2">
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
                  </span>
                  <Link
                    to="/signin"
                    className="my-2 text-[#273c75] transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    Sign in
                  </Link>
                </div>
              )}

              {/* sign in */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
