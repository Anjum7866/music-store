import React, {  useState } from "react";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <p
        className="fixed p-2 z-50 text-xl md:hidden"
        onClick={() => setSidebar(!sidebar)}
      >
        =
      </p>

      <div
        className={`sidebar ${
          sidebar ? "" : "max-md:hidden"
        }  bg-black w-100 md:w-2/12  md:h-[100vh] rounded-md `}
      >
        <div className="fixed md:w-2/12 p-3 bg-black h-screen rounded-md">
          <div className="flex items-center justify-between">
            <div className="logo">
              <img src="/logonew.png" className="w-full" alt="" />
            </div>
            <div className="text-right">
              <h1 className="text-blue-500 text-opacity-75 text-2xl text-shadow-md font-extrabold ">
                Redivivus</h1>
            </div>
          </div>
          <h4 className=" text-left font-bold text-xl text-white">Products</h4>

          <NavLink to={"/iPrint"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">iPRINT</span>
          </NavLink>

          <NavLink to={"/wimaRT"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">wimaRT Warehouse item</span>
          </NavLink>

          <NavLink to={"/management"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">Management system</span>
          </NavLink>

          <NavLink to={"/tracking"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">Real Time Tracking System</span>
          </NavLink>

          <h4 className=" text-left font-bold text-xl text-white mt-2">Services</h4>

          <NavLink to={"/dotnet"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">Dot net development</span>
          </NavLink>

          <NavLink to={"/websystem"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">Web System Development</span>
          </NavLink>

          <NavLink to={"/mobile"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">Mobile Development</span>
          </NavLink>

          <NavLink to={"/industry"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">Industry Services</span>
          </NavLink>

          
          {/* <h4 className=" text-left font-bold text-xl text-white mt-2">About</h4>

          <NavLink to={"/about"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">About Us</span>
          </NavLink>

          <NavLink to={"/sitemap"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">Site Map</span>
          </NavLink>

          <NavLink to={"/policy"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">Privacy Policy</span>
          </NavLink>

           <div className="flex items-center justify-between">
            <div className="logo">
              
            <h4 className=" text-left font-bold text-xl text-white mt-2">Connect</h4>
            <img  alt="social"src="/social.png" className="w-1/2" />
            </div>
           
          </div> */}
          

        </div>
      </div>
    </>
  );
};

export default Navbar;

const NavLink = ({ to, children, ...props }) => {
  
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end:true})

  return (
    <>
    <Link to={to}>
      <div
      {...props}
        className={`tab  w-11/12 my-2 ${
            isActive ? "bg-primary-500 text-white" : "text-white"
        }  rounded-lg flex  m-auto`}
        >
        {children}
      </div>
          </Link>
    </>
  );
};
