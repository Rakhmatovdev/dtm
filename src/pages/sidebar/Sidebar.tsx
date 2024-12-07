import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router"
export default function ISidebar() {
  return (<div className="flex justify-start">
    <SidebarProvider className="w-[260px] flex-1 " >
      <AppSidebar  />
        <SidebarTrigger />
    </SidebarProvider>
    <main className="w-full ml-4"><Outlet/></main>
     
  </div>)
}
