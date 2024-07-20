// /* eslint-disable no-undef */
// /* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable no-unused-vars */
// import React, { useContext, useState } from 'react'
// import { CiMail } from 'react-icons/ci'
// import { BiMailSend, BiPhoneCall} from 'react-icons/bi'
// import { BsSearch } from 'react-icons/bs'
// import { VscAccount } from 'react-icons/vsc'
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
// import { Link } from 'react-router-dom'
// import { NavLink , useLocation} from 'react-router-dom';
// import Profile from '../pages/profile';
// import compare from "../assets/images/compare.svg";
// import wishlist from "../assets/images/wish.webp";
// import user from "../assets/images/wish.webp";
// import logo from '../assets/logo.jpg';
// import logo2 from '../assets/images/eco.png';
// import logo1 from '../assets/images/eco1.png';
// import logo3 from '../assets/images/n1.jpg';
// // import SeelctBus from '../pages/selectBus'
// //import { BiPhoneCall } from 'react-icons/bi'


// const header = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   // const { getTotalCartProducts, getTotalCartAmount } = useContext(ShopContext);
//   // const totalAmount = getTotalCartAmount();
//   // const totalProducts = getTotalCartProducts();
//   const location = useLocation();
//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
//   const Redirect = async () =>
//     {
//         await(window.location.href="http://localhost:2233/auth/google")
//     }

//   return <>
//   <header className='navbar-top p-2'>
//     <div className="container-xl">
//       <div className="row">
//         <div className="d-flex align-items-center justify-content-between d-none d-md-flex">
//           <div className="col-md-4 me-auto">
//             <p className='text-black'><BiPhoneCall/>+934567210</p>
//           </div>
//           <div className="col-md-7 align-items-left">
//           {/* <img src={logo3}  className="card-img-top img-fluid m-auto"  class='logo' alt="Quick Shipping" /> */}
//           <p><BiMailSend/>mainorganisation@gmail.com</p>
          
//           </div>
//           <div className="col-md-1">
//           {/* <img src={logo2}  className="card-img-top img-fluid m-auto"  class='logo' alt="Quick Shipping" />
//            */}
//            <p><BiPhoneCall/>+5689234567</p>
//           </div>
//           <div className="col-md-1 ms-auto">
            
//           {/* <img src={logo1} className="card-img-top img-fluid m-auto"  class='logo' alt="Quick Shipping" /> */}
           
//           </div>
//         </div>
//         <div className="d-flex align-items-center  justify-content-between d-md-none">
//           <div className="col-md-6 me-auto">
//             <p>S</p>
//           </div>
//           <div className="col-md-2 m-auto">
//           <a href=""></a>
//           </div>
//           <div className="col-md-2 m-auto">
            
          
//           </div>
//         </div>

        
//       </div>
//     </div>
//   </header>
//   <header className='navbar-middle sticky-top p-2 p-md-2 p-lg-1'>
//   <div className="container-xxl">
//     <div className="row align-items-center ">
//       <div className="col-md-2 d-flex justify-content-center">
//         <button className="navbar-toggler d-md-none" type="button" onClick={toggleMenu}>
//           <span className="navbar-toggler-icon">{showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}</span>
//         </button>
//         <Link to='/' className='d-md-flex'>
//           <img src={logo} alt="logo" className='img-fluid logo' /><h3 className='d-flex flex-wrap'>BusGo</h3><p className='d-flex flex-wrap'>Digital</p> 
//         </Link>
//       </div>

//       <div className="col-md-11 row col-lg-10">
//         <div className="col-md-6 m-auto">
//           <div className='menu-links mt-2 d-none d-md-flex d-lg-flex'>
//             <div className='ms-auto gap-3'><NavLink to="/" className={location.pathname === '/' ? 'active' : 'not-active'} onClick={toggleMenu}>Home</NavLink></div>
//             <div className='ms-auto gap-3'><NavLink to="/about" className={location.pathname === '/about' ? 'active' : 'not-active'} onClick={toggleMenu}>About</NavLink></div>
//             {/* <div className='ms-auto gap-2'><NavLink to="/faq" className={location.pathname === '/faq' ? 'active' : 'not-active'} onClick={toggleMenu}>FAQs</NavLink></div> */}
//             <div className='ms-auto gap-2'><NavLink to="/" className={location.pathname === '/' ? 'active' : 'not-active'} onClick={toggleMenu}>Blog</NavLink></div>
//             <div className='ms-auto gap-2'><NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : 'not-active'} onClick={toggleMenu}>Contact</NavLink></div>
//           </div>
//         </div>
//         <div className="col-md-4" >
//           <div className="row d-flex mt-2 d-md-flex m-0">
//             <div className="d-flex flex-wrap align-items-center">
//               <div className="cmn--btn.btn--sm  gap-2">
//               {/* <div className={location.pathname === '/' ? 'active' : 'not-active'}>
//                 <Link onClick={toggleMenu} to="" className="d-flex align-items-center color-nav me-3">
//                   <TbShoppingBagPlus className='me-1 fs-2' />
//                 </Link>
//               </div>
//               <div className={location.pathname === 'login' ? 'active' : 'not-active'}>
//                 <Link onClick={toggleMenu} to="/login" className="d-flex align-items-center color-nav me-3">
//                   <VscAccount className='me-1 fs-2' />
//                 </Link>
//               </div>
//               <div className={location.pathname === 'cart' ? 'active' : 'not-active'}>
//                 <Link onClick={toggleMenu} to="/cart" className="d-flex align-items-center color-nav me-3 cart-span-one">
//                   <CgShoppingCart className='me-1 fs-2' />
//                   <div>
//                     <p><b><span>{totalProducts}</span></b></p>
//                   </div>
//                 </Link>
//               </div> */}
//                <Link to='/' className='btn btn-primary ' id='button-link1'>BUY TICKETS</Link>
//                </div>
//                {/* <div className={location.pathname === 'login' ? 'active' : 'not-active'}>
//                 <Link onClick={toggleMenu} to="/login" className="d-flex align-items-center color-nav me-3 ">
//                   <VscAccount className='me-1 fs-2' />
//                 </Link>
//               </div> */}
//             <div className="col-md-2"></div>
//             <div className={location.pathname === 'login' ? 'active' : 'not-active'}>
//                 <Link onClick={toggleMenu} to="/login" className="d-flex align-items-center color-nav me-5  ">
//                   <VscAccount className='me-1 fs-2' />
//                   {/* <Profile/> */}
//                 </Link>
                
              
//               </div>
//               </div>
//           </div>
//         </div>
//       </div>

//       {showMenu && (
//         <div className="col-md-10 d-md-none mt-3">
//           <div className='menu-links mt-2'>
//             <div className='mb-2'>
//               <NavLink className={location.pathname === '/' ? 'active' : 'not-active'} to="/" onClick={toggleMenu}>Home</NavLink>
//             </div>
//             <div className='mb-2'>
//               <NavLink className={location.pathname === '/about' ? 'active' : 'not-active'} to="/" onClick={toggleMenu}>About</NavLink>
//             </div>
//             {/* <div className='mb-2'>
//               <NavLink className={location.pathname === '/faq' ? 'active' : 'not-active'} to="/" onClick={toggleMenu}>FAQs</NavLink>
//             </div> */}
//             <div className='mb-2'>
//               <NavLink className={location.pathname === '/' ? 'active' : 'not-active'} to="/" onClick={toggleMenu}>Blog</NavLink>
//             </div>
//             <div className='mb-2'>
//               <NavLink className={location.pathname === '/contact' ? 'active' : 'not-active'} to="/contact" onClick={toggleMenu}>Contact</NavLink>
//             </div>
//           </div>

//           <div className="menu-bar__actions ">
//             <div className='back-details'>
//               <Link to='/' className='btn btn-primary' id='button-link'>Get ticket Now</Link>
//             </div>
//           </div><br/>
//           <div className=" d-flex  gap-2 m-auto">
//           <div className={location.pathname === 'login' ? 'active' : 'not-active'}>
//                 <Link onClick={toggleMenu} to="/login" className="d-flex align-items-center col-md-5 color-nav p-2">
//                 <Link onClick={Redirect} activeClassName='is-active' to={''}> Sign In/Sign Up </Link> 
//                   <VscAccount className='me-1 fs-2'  />
//                 </Link>
                
//               </div>
//         </div>
//         </div>
//       )}
//     </div>
//   </div>
// </header>
// </>;
// };


// import React, { useState } from 'react';
// import { BiMailSend, BiPhoneCall } from 'react-icons/bi';
// import { VscAccount } from 'react-icons/vsc';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import logo from '../assets/logo.jpg';

// const Header = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showMenu, setShowMenu] = useState(false);
//   const location = useLocation();

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const Redirect = async () => {
//     await (window.location.href = "http://localhost:2233/auth/google");
//   };

//   return (
//     <>
//       <header className='navbar-top p-2'>
//         <div className="container-xl">
//           <div className="row">
//             <div className="d-flex align-items-center justify-content-between d-none d-md-flex">
//               <div className="col-md-4 me-auto">
//                 <p className='text-black'><BiPhoneCall />+934567210</p>
//               </div>
//               <div className="col-md-7 align-items-left">
//                 <p><BiMailSend />mainorganisation@gmail.com</p>
//               </div>
//               <div className="col-md-1">
//                 <p><BiPhoneCall />+5689234567</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <header className='navbar-middle sticky-top p-2 p-md-2 p-lg-1'>
//         <div className="container-xxl">
//           <div className="d-flex align-items-center justify-content-between">
//             <div className="d-flex align-items-center">
//               <button className="navbar-toggler d-md-none" type="button" onClick={toggleMenu}>
//                 <span className="navbar-toggler-icon">{showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}</span>
//               </button>
//               <Link to='/' className='d-md-flex align-items-center'>
//                 <img src={logo} alt="logo" className='img-fluid logo' />
//                 <h3 className='d-flex flex-wrap'>BusGo</h3>
//                 <p className='d-flex flex-wrap'>Digital</p>
//               </Link>
//             </div>

//             <div className="d-none d-md-flex align-items-center gap-5">
//               <NavLink to="/" className={location.pathname === '/' ? 'active' : 'active'}>HOME</NavLink>
//               <NavLink to="/about" className={location.pathname === '/about' ? 'not-active' : 'not-active'}>ABOUT</NavLink>
//               <NavLink to="/" className={location.pathname === '/' ? 'active' : 'not-active'}>BLOG</NavLink>
//               <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : 'not-active'}>CONTACT</NavLink>
//             </div>

//             <div className="d-flex align-items-center gap-1">
//               <Link to='/' className='btn btn-primary' id='button-link1' style={{ marginLeft: '-10px' }}>BUY TICKETS</Link>
//               <div className="relative" style={{ position: 'relative' }}>
//                 <button
//                   onClick={toggleDropdown}
//                   className="inline-flex justify-center w-full rounded-md border border-gray-400 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   id="options-menu"
//                   aria-haspopup="true"
//                   aria-expanded={showDropdown ? 'true' : 'false'}
//                 >
//                   <VscAccount className='mr-1 me-1 fs-2 bg-blue' />
//                 </button>

//                 {showDropdown && (
//                   <ul
//                     className="origin-top-right absolute right-0 mt-4 w-76 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
//                     role="menu"
//                     aria-orientation="vertical"
//                     aria-labelledby="options-menu"
//                   >
//                     <li>
//                       <Link
//                         to="/signup-or-login"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
//                         role="menuitem"
//                         onClick={toggleDropdown}
//                       >
//                         <VscAccount className='mr-2' />
//                         Signup or Login
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/show-my-tickets"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         role="menuitem"
//                         onClick={toggleDropdown}
//                       >
//                         Show My Tickets
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/cancel-ticket"
//                         className="me-1 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         role="menuitem"
//                         onClick={toggleDropdown}
//                       >
//                         Cancel Ticket
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/change-travel"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         role="menuitem"
//                         onClick={toggleDropdown}
//                       >
//                         Change Travel
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/dashboard"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         role="menuitem"
//                         onClick={toggleDropdown}
//                       >
//                         Dashboard
//                       </Link>
//                     </li>
//                   </ul>
//                 )}
//               </div>
//             </div>
//           </div>

//           {showMenu && (
//             <div className="d-md-none mt-3">
//               <div className='menu-links mt-2'>
//                 <NavLink className={location.pathname === '/' ? 'active' : 'not-active'} to="/" onClick={toggleMenu}>Home</NavLink>
//                 <NavLink className={location.pathname === '/about' ? 'active' : 'not-active'} to="/about" onClick={toggleMenu}>About</NavLink>
//                 <NavLink className={location.pathname === '/' ? 'active' : 'not-active'} to="/" onClick={toggleMenu}>Blog</NavLink>
//                 <NavLink className={location.pathname === '/contact' ? 'active' : 'not-active'} to="/contact" onClick={toggleMenu}>Contact</NavLink>
//                 <NavLink className={location.pathname === '/dashboard' ? 'active' : 'not-active'} to="/dashboard" onClick={toggleMenu}>Dashboard</NavLink>
//               </div>

//               <div className="menu-bar__actions">
//                 <Link to='/' className='btn btn-primary' id='button-link'>Get ticket Now</Link>
//                 <div className="d-flex gap-2 m-auto">
//                   <Link onClick={toggleMenu} to="/login" className="d-flex align-items-center color-nav p-2">
//                     <Link onClick={Redirect} activeClassName='is-active' to={''}> Sign In/Sign Up </Link>
//                     <VscAccount className='me-1 fs-2' />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

import React, { useState, useRef, useEffect } from 'react';
import { BiMailSend, BiPhoneCall } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const Redirect = async () => {
    await (window.location.href = "http://localhost:2233/auth/google");
  };

  return (
    <>
      <header className='navbar-top p-2'>
        <div className="container-xl">
          <div className="row">
            <div className="d-flex align-items-center justify-content-between d-none d-md-flex">
              <div className="col-md-4 me-auto">
                <p className='text-black'><BiPhoneCall />+934567210</p>
              </div>
              <div className="col-md-7 align-items-left">
                <p><BiMailSend />mainorganisation@gmail.com</p>
              </div>
              <div className="col-md-1">
                <p><BiPhoneCall />+5689234567</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className='navbar-middle sticky-top p-2 p-md-2 p-lg-1'>
        <div className="container-xxl">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <button className="navbar-toggler d-md-none" type="button" onClick={toggleMenu}>
                <span className="navbar-toggler-icon">{showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}</span>
              </button>
              <Link to='/' className='d-md-flex align-items-center'>
                <img src={logo} alt="logo" className='img-fluid logo' />
                <h3 className='d-flex flex-wrap'>BusGo</h3>
                <p className='d-flex flex-wrap'>Digital</p>
              </Link>
            </div>

            <div className="d-none d-md-flex align-items-center gap-5">
              <NavLink to="/" className={location.pathname === '/' ? 'active' : 'active'}>HOME</NavLink>
              <NavLink to="/about" className={location.pathname === '/about' ? 'not-active' : 'not-active'}>ABOUT</NavLink>
              <NavLink to="/" className={location.pathname === '/' ? 'active' : 'not-active'}>BLOG</NavLink>
              <NavLink to="/contact" className={location.pathname === '/contact' ? 'not-active' : 'not-active'}>CONTACT</NavLink>
            </div>

            <div className="d-flex align-items-center gap-1">
              <Link to='/buses' className='btn btn-primary' id='button-link1' style={{ marginLeft: '-10px' }}>BUY TICKETS</Link>
              <div className="relative" style={{ position: 'relative' }}>
                <button
                  onClick={toggleDropdown}
                  className="inline-flex items-center justify-center w-full rounded-xs border border-gray-400 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-800 hover:bg-gray-30 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded={showDropdown ? 'true' : 'false'}
                >
                  <VscAccount className='mr-1 me-1 fs-2 bg-blue-500 text-blue-500' />
                </button>

                {showDropdown && (
                  <ul
                    ref={dropdownRef}
                    className="origin-top-right absolute right-0 mt-4 w-76 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <li>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        role="menuitem"
                        onClick={toggleDropdown}
                      >
                        <VscAccount className='mr-2' />
                        Signup or Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/showticket"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={toggleDropdown}
                      >
                        Show My Tickets
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/canceltick"
                        className="me-1 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={toggleDropdown}
                      >
                        Cancel Ticket
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/change-travel"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={toggleDropdown}
                      >
                        Change Travel
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={toggleDropdown}
                      >
                        Dashboard
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          {showMenu && (
            <div className="d-md-none mt-3">
              <div className='menu-links mt-2'>
                <NavLink className={location.pathname === '/' ? 'active' : 'not-active'} to="/" onClick={toggleMenu}>Home</NavLink>
                <NavLink className={location.pathname === '/about' ? 'active' : 'not-active'} to="/about" onClick={toggleMenu}>About</NavLink>
                <NavLink className={location.pathname === '/' ? 'active' : 'not-active'} to="/" onClick={toggleMenu}>Blog</NavLink>
                <NavLink className={location.pathname === '/contact' ? 'active' : 'not-active'} to="/contact" onClick={toggleMenu}>Contact</NavLink>
                <NavLink className={location.pathname === '/dashboard' ? 'active' : 'not-active'} to="/dashboard" onClick={toggleMenu}>Dashboard</NavLink>
              </div>

              <div className="menu-bar__actions">
                <Link to='/' className='btn btn-primary' id='button-link'>Get ticket Now</Link>
                <div className="d-flex gap-2 m-auto">
                  <Link onClick={toggleMenu} to="/login" className="d-flex align-items-center color-nav p-2">
                    <Link onClick={Redirect} activeClassName='is-active' to={''}> Sign In/Sign Up </Link>
                    <VscAccount className='me-1 fs-2' />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
