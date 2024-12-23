import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import AuthLayout from "./auth/AuthLayout";
import QueryProvider from "./components/providers/query.provider";
import Adds from "./pages/app/ads/Adds";
import Banners from "./pages/app/banner/Banners";
import Categories from "./pages/app/categorie/Categories";
import Company from "./pages/app/company/Company";
import Contacts from "./pages/app/contact/Contacts";
import ProductImage from "./pages/app/product/ProductImage";
import Products from "./pages/app/product/Products";
import Settings from "./pages/app/setting/Settings";
import Login from "./auth/components/Login";
import Home from "./pages/home/Home";
import AddDetail from "./pages/app/ads/AddDetail";
import BannerDetail from "./pages/app/banner/BannerDetail";
import CategorieDetail from "./pages/app/categorie/CategorieDetail";
import CompanyDetail from "./pages/app/company/CompanyDetail";
import ContactDetail from "./pages/app/contact/ContactDetail";
import ProductImageDetail from "./pages/app/product/ProductImageDetail";
import ProductDetail from "./pages/app/product/ProductDetail";
import AddUpdate from "./pages/app/ads/AddUpdate";
import PasswordChange from "./pages/app/setting/PasswordChange";
import BannerUpdate from "./pages/app/banner/BannerUpdate";
import CategorieUpdate from "./pages/app/categorie/CategorieUpdate";
import CompanyUpdate from "./pages/app/company/CompanyUpdate";
import ContactUpdate from "./pages/app/contact/ContactUpdate";
import ProductImageUpdate from "./pages/app/product/ProductImageUpdate";
import ProductUpdate from "./pages/app/product/ProductUpdate";



createRoot(document.getElementById("root")!).render(
  <>
    <QueryProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<App />} >
            <Route path="/" element={<Home/>}/>
            <Route path="/app/adds" element={<Adds/>}/>
            <Route path="/app/adds/add" element={<AddDetail/>}/>
            <Route path="/app/adds/:id/change" element={<AddUpdate/>}/>


            <Route path="/app/banners" element={<Banners/>}/>
            <Route path="/app/banners/add" element={<BannerDetail/>}/>
            <Route path="/app/banners/:id/change" element={<BannerUpdate/>}/>


            <Route path="/app/categories" element={<Categories/>}/>
            <Route path="/app/categories/add" element={<CategorieDetail/>}/>
            <Route path="/app/categories/:id/change" element={<CategorieUpdate/>}/>

            <Route path="/app/company" element={<Company/>}/>
            <Route path="/app/company/add" element={<CompanyDetail/>}/>
            <Route path="/app/company/:id/change" element={<CompanyUpdate/>}/>

            <Route path="/app/contacts" element={<Contacts/>}/>
            <Route path="/app/contacts/add" element={<ContactDetail/>}/>
            <Route path="/app/contacts/:id/change" element={<ContactUpdate/>}/>



            <Route path="/app/product-images" element={<ProductImage/>}/>
            <Route path="/app/product-images/add" element={<ProductImageDetail/>}/>
            <Route path="/app/product-images/:id/change" element={<ProductImageUpdate/>}/>

            <Route path="/app/products" element={<Products/>}/>
            <Route path="/app/products/add" element={<ProductDetail/>}/>
            <Route path="/app/products/:id/change" element={<ProductUpdate/>}/>

            <Route path="/users/settings" element={<Settings/>}/>
            <Route path="/users/change" element={<PasswordChange/>}/>
            </Route>

            <Route element={<AuthLayout />}>
           <Route path="/login" element={<Login/>}/>
            </Route>

          </Routes>
        </BrowserRouter>
    </QueryProvider>
   
  </>
);
