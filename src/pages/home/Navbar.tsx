import { Link } from "react-router";
import { KeyOutlined, LogoutOutlined,  SettingOutlined, UserOutlined } from "@ant-design/icons";

import { logOut } from "@/service";
import {  Popover } from 'antd';
import { useState } from "react";
import USearch from "@/components/ui/USearch";

const Navbar = () => {


    const [open, setOpen] = useState(false);

    // const hide = () => {
    //   setOpen(false);
    // };
  
    const handleOpenChange = (newOpen: boolean) => {
      setOpen(newOpen);
    };

  return (
    <nav>
      <div className="flex justify-between items-center  gap-4 sm:gap-0 h-8 mt-4 mr-4 sm:w-[81vw]">
        
        <USearch ClassName="hidden sm:flex " EnterButton Suffix placeholder="Search..."/>

        
         <Popover
      content={
      <form onSubmit={logOut} className=" space-y-2">
            <Link
              to={"users/settings"}
              className="flex gap-2 items-center cursor-pointer" onClick={()=>setOpen(false)}
            >
             <SettingOutlined /> <span className="text-sm">Setting</span>{" "}
            </Link>
            <Link
              to={"users/change"}
              className="flex gap-2 items-center cursor-pointer" onClick={()=>setOpen(false)}
            >
             <KeyOutlined /> <span className="text-sm">Password</span>{" "}
            </Link>
            <button type="submit" className="flex gap-2 items-center cursor-pointer" >
            <LogoutOutlined /> <span className="text-sm"> Logout</span>{" "}
            </button>
            </form>
      }
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <button className="btn-user">
      <UserOutlined className="text-xs sm:text-sm"/>
      </button>
    </Popover>
      </div>
    </nav>
  );
};

export default Navbar;
