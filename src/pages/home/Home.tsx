
import UBreadcrumb from "@/components/ui/UBreadcrumb"
import UChart from "@/components/ui/UChart"
import { itemHome } from "@/types/data"

const Home = () => {
  return (
    <div className="h-[86.2vh]" >
   <UBreadcrumb items={itemHome}/>
     <div className="flex flex-col sm:flex-row">
       <UChart type="bar" />
      <UChart type="area" />
      <UChart type='line' />
      </div>
      </div>
  )
  
}

export default Home