import { itemSetting } from "@/types/data"
import {  Collapse, CollapseProps } from "antd"
import PersonalInfo from "./PersonalInfo";
import ImportandDate from "./ImportandDate";
import UBreadcrumb from "@/components/ui/UBreadcrumb";

const Settings = () => {




  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Personal info',
      children: <PersonalInfo/> ,
    },
    {
      key: '2',
      label: 'Important dates',
      children: <ImportandDate/>,
    }
  ];


  return (
    <div className="h-[86.2vh]" >
   <UBreadcrumb items={itemSetting}/>

   
    <div className="mt-7">
        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="border p-4 w-full space-y-4 rounded">

          <Collapse
      items={items} 
        defaultActiveKey={['1']}
        className="bg-blue-100 font-bold"
    />
    

</div>
          <div className="space-y-4  flex flex-col ">
            <button type="submit" className="btn-save ">Save</button> 
          </div>
        </div>
      </div>
      
      </div>
  )
}

export default Settings