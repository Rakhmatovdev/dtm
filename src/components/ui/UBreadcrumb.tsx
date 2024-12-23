import { PlusCircleOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Link } from "react-router";
const UBreadcrumb = ({items,btn}:{items:any,btn?:{link:string,title:string}}) => {


    if(btn?.title){
        return (<>
        <div className="flex justify-between items-center  ">
            
              
              <Breadcrumb
                className="text-[10px] sm:text-lg mt-1"
                separator=">"
                items={items}
              />
    
            <Link to={btn.link} className="border sm:px-4 sm:py-2 px-2 py-1 rounded-[8px] flex gap-x-2 items-center bg-blue-900 text-white">
              <PlusCircleOutlined className="text-[10px] sm:text-sm"/>
              <span className="font-semibold text-[10px] sm:text-sm  ">{btn.title}</span>
            </Link>
          </div>
          <hr className="border-none h-px w-full bg-black mt-2 sm:mt-5" />
        </>)
    }
  return (
    <>
     
        <div className="flex justify-between items-center ">
          <Breadcrumb
            className="text-[10px] sm:text-lg sm:mt-[5.5px]"
            separator=">"
            items={items}
          />
        </div>
        <hr className="border-none h-px w-full bg-black mt-2 sm:mt-[25.5px]" />
      
    </>
  );
};

export default UBreadcrumb;
