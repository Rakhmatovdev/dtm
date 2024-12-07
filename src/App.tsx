import { Outlet } from "react-router";
import ISidebar from "./pages/sidebar/Sidebar";

export default function App() {
  return (
    <>
    <div className="flex">
    <ISidebar/>
    {/* <main className=" border ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora iste aspernatur similique harum accusamus labore sequi ab molestias deserunt eos nihil omnis consectetur quibusdam dolorem nam, fugiat saepe unde.</main> */}
     </div> <Outlet />
    </>
  );
}