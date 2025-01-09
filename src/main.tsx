import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import AuthLayout from "./auth/AuthLayout";
import QueryProvider from "./components/providers/query.provider";
import CreateExam from "@/pages/app/create-exam/ListExam";
import Settings from "./pages/app/setting/Settings";
import Login from "./auth/components/Login";
import Home from "./pages/home/Home";
import AddExam from "@/pages/app/create-exam/AddExam.tsx";
import PasswordChange from "./pages/app/setting/PasswordChange";
import Register from "@/auth/components/Register.tsx";
import Statistica from "@/pages/app/statistic/Statistica.tsx";
import StartExam from "@/pages/app/exam/start-exam.tsx";
import UserExam from './pages/app/statistic/user-exam';
import UploadTests from "./pages/app/upload/upload-test";
import QuestionList from "./pages/app/exam/question";



createRoot(document.getElementById("root")!).render(
  <>
    <QueryProvider>
        <BrowserRouter>
          <Routes>

            <Route element={<App />} >
            <Route path="/" element={<Home/>}/>
            <Route path="/app/exam" element={<CreateExam/>}/>
            <Route path="/app/exam/add" element={<AddExam/>}/>

            <Route path="/app/upload" element={<UploadTests/>}/>

            <Route path="/start/exam" element={<StartExam/>}/>
            <Route path="/start/exam/:examId/change" element={<QuestionList/>}/>


          
           <Route path={'/user/statistic'} element={<Statistica/>}/>
           <Route path={'/user/statistic/:id'} element={<UserExam/>}/>


         

            <Route path="/users/settings" element={<Settings/>}/>
            <Route path="/users/change" element={<PasswordChange/>}/>
            </Route>

            <Route element={<AuthLayout />}>
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
            </Route>

          </Routes>
        </BrowserRouter>
    </QueryProvider>
   
  </>
);
