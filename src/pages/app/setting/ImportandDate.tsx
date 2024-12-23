import { CalendarOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { DatePicker, TimePicker } from "antd";
import { useState } from "react";

const ImportandDate = () => {

  const [date, setDate] = useState(null);

  const handleChange = (date:any, dateString:any) => {
    if (date) {
    setDate(dateString);
    }}
console.log(date);

  return (
    <div className=" w-full rounded">
      <div className="fff sm:mt-2 sm:gap-32">
        <p className="text-lg font-semibold sm:pr-[22px]">Last Login</p>
        <div className="">
         <div className="flex flex-col">
            <span>Date:</span>
            <DatePicker onChange={handleChange} />
          <div className="flex gap-1 sm:mt-2"> <span> Today | </span> <CalendarOutlined/></div>
         </div>
         <div className="flex flex-col mt-2">
         <span>Time:</span>
         <TimePicker />
         <div className="flex gap-1 sm:mt-2"> <span> Now | </span> <FieldTimeOutlined/></div>
        <span className="text-[10px] sm:text-sm text-slate-400"> Note: You are 5 hours ahead of server time.</span>
         </div>
        </div>
      </div>

    </div>
  );
}

export default ImportandDate;
