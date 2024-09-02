import React from "react";

const Footer = () => {
  return (
    <div
      id="footerComponent"
      className="min-h-[30vh] text-white flex flex-col px-4 bg-black w-[100%]"
    >
      <div className="foooter flex w-[100%]  h-[30vh] ">
        <div className="footer-left w-[50%] gap-4 flex flex-col justify-center pl-20 h-full">
          {/* <img className='h-[170px] border  w-[170px] object-contain' src="/weblogo.png" alt="" /> */}
          <h1 className="text-white z-[40] cursor-none font-bold text-2xl">CRISIS FRIEND</h1>
          <div className="helpline flex flex-col"> 
            <h1 className="font-bold cursor-none z-[40] text-xl">HelpLine No.- </h1>
            <span className="cursor-none z-[40] ">National Disaster Management Authority (NDMA): 1800119999</span>
            <span className="cursor-none z-[40] ">National Disaster Response Force (NDRF): 01124363260</span>
            <span className="cursor-none z-[40] ">India Meteorological Department(IMD): 01124611792</span>
          </div>
         
        </div>
        <div className="profile-links cursor-none z-[40] mr-20 justify-center items-center   w-fit gap-5  flex">
            <a href="">
              <img
                className="h-[35px]  object-contain"
                src="/Social/linkedin.png"
                alt=""
              />
            </a>
            <a href="">

            <img
              className="h-[35px] object-contain"
              src="/Social/ig.png"
              alt=""
            />
            </a>
            <a href="">

            <img
              className="h-[35px]  object-contain"
              src="/Social/github.png"
              alt=""
            />

            </a>
          </div>
        <div className="footer-right w-[40%] cursor-none z-[40]   h-full flex flex-col gap-5 pl-20 justify-center text-white">
          <h1 className="font-bold text-xl">
            Get latest updates and protect yourself
          </h1>
          <div className="flex ">
            <input
              type="email"
              name=""
              id=""
              className="text-[#95c11e] cursor-pointer border-[2px] border-orange-500 text-xl py-1  rounded-l-md pl-3  font-bold placeholder:text-[#95c11e]"
              placeholder="Enter your email"
            />
            <button className=" border py-1 px-4 rounded-r-md"> Send</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
