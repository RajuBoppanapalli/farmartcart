import { Route, Routes } from "react-router-dom";
import { Main } from "./components/main/main.component";
import {NavBarComp} from"./components/NavBar/navbar.component"
import { Footer } from "./components/Footer/footer.component";
import { Home } from "./components/Home/home.component";
import { RelatedProducts } from "./components/RelatedProducts/RelatedProducts.component";
import { Registration } from "./components/Registeration/Registration.component";
import { Login } from "./components/Login/login.component";

import { OrderTracking } from "./components/ordartracking/OrderTracking.component";
import { Blog } from "./components/Blog/Blog.component";
import { Contact } from "./components/Contact/Contact.component";
import { Wishlist } from "./components/wishlist/wishlist.component";
import { ShopingCart } from "./components/Cart/cart.component";
import { Store } from "./components/Store/Store.component";
import { SpecialPrice } from "./components/SpecialPrice/specialprice.component";
import { AddProduct } from "./components/addproduct/addproduct.component";
import { CompareProducts } from "./components/compare/compare.component";
import { Products } from "./components/product/product.component";
import { OneProduct } from "./components/SpecialPrice/oneproduct.component";




export function AppRouter(){
    return(
        <>
        <Routes>  
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/related" element={<RelatedProducts></RelatedProducts>}></Route>
            <Route path="/register" element={<Registration></Registration>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/products" element={<Products></Products>}></Route>
            <Route path="/Tracking-order" element={<OrderTracking></OrderTracking>}></Route>
            <Route path="/Blog" element={<Blog></Blog>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
            <Route path="/shopingcart" element={<ShopingCart></ShopingCart>}></Route>
            <Route path="/shopone" element={<OneProduct></OneProduct>}></Route>
           
            <Route path="/store" element={<Store></Store>}></Route>
            <Route path="/special/:id" element={<SpecialPrice></SpecialPrice>}></Route>
            <Route path="/addproduct" element={<AddProduct></AddProduct>}></Route>
            <Route path="/compare" element={<CompareProducts></CompareProducts>}></Route>
            
        </Routes>
   
        </>
    )
}