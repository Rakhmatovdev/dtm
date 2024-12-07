import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from "react-router"
export default function ISidebar() {
  return (
    <SidebarProvider >
      <AppSidebar  />
        <SidebarTrigger />
      <main>
        <Outlet/>
      </main>
    </SidebarProvider>
  )
}
