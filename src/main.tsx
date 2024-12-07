import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import AuthLayout from "./auth/AuthLayout";
import Login from "./auth/components/Login";
import Register from "./auth/components/Register";
import { ThemeProvider } from "./components/theme/theme-provider";
import Settings from "./pages/sidebar/Settings";

createRoot(document.getElementById("root")!).render(<>
   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/settings" element={<Settings/>}/>

      <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />

  </Route>


    </Routes>
  </BrowserRouter>
  </ThemeProvider>
</>);
