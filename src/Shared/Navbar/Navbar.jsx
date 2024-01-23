import { Link, NavLink } from "react-router-dom";
import webLogo from "../../assets/CubeMart.png"

const Navbar = () => {
    const navLinks = (
      <>
        <NavLink className={({isActive}) => isActive? "bg-warning text-black rounded-lg px-3 py-2 mr-5" : "mr-5 hover:text-warning px-3 py-2" } to={"/"}> Home
        </NavLink>
        <NavLink className={({isActive}) => isActive? "bg-warning text-black rounded-lg px-3 py-2 mr-5" : " mr-5 hover:text-warning px-3 py-2" } to={"about"}> About
        </NavLink>
        <NavLink className={({isActive}) => isActive? "bg-warning text-black rounded-lg px-3 py-2 mr-5" : "mr-5 hover:text-warning px-3 py-2" } to={"/myWork"}> Works
        </NavLink>
        <NavLink className={({isActive}) => isActive? "bg-warning text-black rounded-lg px-3 py-2 mr-5" : "mr-5 hover:text-warning px-3 py-2" } to={"/contact"}> Contact
        </NavLink>
      </>
    );
    return (
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box"
            >
              {navLinks}
            </ul>
          </div>
          <Link className="hidden md:block" to={"/"}>
            <button
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="hover:text-white text-warning"
            >
                <img className="size-14 rounded-full" src={webLogo} alt="" />
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
        <Link className="block md:hidden" to={"/"}>
            <button
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="hover:text-red-600"
            >
              <img className="size-12 rounded-full" src={webLogo} alt="" />
            </button>
          </Link>
          <Link data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"  className="hidden md:block" to={"contact"}>
            <button className="text-warning font-bold text-lg btn btn-sm btn-outline hover:border-red-600 hover:bg-white hover:text-black">
              Let's Talk
            </button>
          </Link>
        </div>
      </div>
    );
  };

export default Navbar;