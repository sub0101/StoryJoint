import React, { useState , useRef , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiSearch, FiPlus, FiLogIn } from 'react-icons/fi';
import  DropdownMenu from '../Explore/DropdownMenu';
import { FaCaretDown } from 'react-icons/fa';


const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div className="relative">
      <div className=" text-center py-2">
        Our site is still under construction. If you find any bugs, don't let them go MIA! Send us your feedback. Thanks for helping us improve! 🛠️👨‍💻
      </div>
      <header className="flex items-center justify-between bg-transparent    py-3 ">
        <div className="flex items-center ">
          <button aria-label="Toggle Menu" onClick={toggleSidebar} className="xl:hidden text-gray-600">
            <FiMenu size="24" />
          </button>
          <h1 className="text-xl font-bold text-pink-800 ml-10 ">        
            <Link to="/" className="text-black font-bold p-3 ">Newsletter</Link>
          </h1>
        </div>
   
        <nav className=" hidden  xl:flex  items-center space-x-80">
        <div className='flex space-x-10'>
     
       <div className='p-1  '> <DropdownMenu /> </div> 
          <Link to="newsletter" className="text-black font-semibold p-3 hover:text-pink-600">Newsletter</Link>
       
          <Link to="my-work-story" className="flex items-center p-3 rounded-lg text-pink-700 font-semibold hover:text-pink-600 hover:bg-pink-100 ">
            <FiPlus size="16" className="mr-1" />
            
            <span className=''>Write a story </span> 
          </Link>
        </div>
       
          <div className="flex items-center space-x-4">
            <div className="relative sm:hidden ">
              <input type="text" placeholder="Search anything..." className="px-4 py-2  border rounded-lg focus:outline-none" />
              <div className="absolute top-0 right-0 flex items-center h-full px-3 text-gray-500">
                <FiSearch size="16" />
                <span className="ml-1">K</span>
              </div>
            </div>
            <div className="relative inline-block text-left">
      <div onClick={toggleDropdown} className="flex items-center cursor-pointer">
        <img
          src="path/to/your/profile-image.jpg" // replace with the actual path to your image
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
        <FaCaretDown className="ml-2" />
      </div>

      {isOpen && (
        <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
          <div className="py-1">
           <Link to="profile"> <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">Profile Setting</button></Link> 
            <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">Logout</button>
           {/* <Link to =  >  <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"></button>  </Link> */}
          </div>
        </div>
      )}
    </div>
            {/* <Link to ="user/login">
            <button className="px-4 py-2  bg-pink-600 text-white rounded-full flex items-center">
              <FiLogIn size="16" className="mr-1" /> Login
            </button>
            </Link> */}
           
          </div>
        </nav>
      </header>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity"></div>
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full  backdrop-blur-lg backdrop-invert bg-pink-200/30  shadow-lg z-20 w-96 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <button aria-label="Close Menu" onClick={toggleSidebar} className="absolute top-4 right-4 text-gray-600">
          <FiX size="24" />
        </button>
        <nav className="mt-16 space-y-4 px-4" onClick={toggleSidebar}>
             <div className='p-1 '> <DropdownMenu /> </div> 
          <Link to="newsletter" className="text-black block font-semibold p-3 hover:text-pink-600">Newsletter</Link>
          <Link to="write" className="items-center  flex  p-3 rounded-lg text-pink-700 font-semibold hover:text-pink-600 hover:bg-pink-100 ">
            <FiPlus size="16" className="mr-1" />
            <span className=''>Write a story </span> 
          </Link>
          
          <div className="flex items-center space-x-4 flex-col ">
            <div className="relative">
              <input type="text" placeholder="Search anything..." className="px-4 py-2 border rounded-full focus:outline-none" />
              <div className="absolute top-0 right-0 flex items-center h-full px-3 text-gray-500">
                <FiSearch size="16" />
                <span className="ml-1">K</span>
              </div>
            </div>
            <button className="px-4 py-2 bg-pink-600 text-white rounded-full flex items-center mt-10">
            <FiLogIn size="16" className="mr-1" /> Login
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
