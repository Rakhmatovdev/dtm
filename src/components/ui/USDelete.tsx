import USelect from "./USelect"
import { ODeleted } from '../../types/data';

const USDelete = ({control,name,select,count}:{control:any,name?:string,select?:string|number,count?:number|string}) => {
  return (
    <div className="sm:mt-7 mt-3 flex items-center gap-3">
       <USelect className="sm:h-9  "  options={ODeleted}
       name={name?name:'is_deleted'}
       control={control}
       />
        <button type="submit" className="btn-go text-[10px] sm:text-sm">Go</button>
        <span className="text-[10px] sm:text-[14px]">{count?count:0} of {select?select:0} selected</span>
      </div>
  )
}

export default USDelete