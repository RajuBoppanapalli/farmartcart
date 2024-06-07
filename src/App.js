import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Approuter';
import { NavBarComp } from './components/NavBar/navbar.component';
import { Footer } from './components/Footer/footer.component';
import { WishlistProvider } from './services/wishlistcontext';
import { CartProvider } from './services/cartcontext';
import { CompareProvider } from './services/comparecontext';
import { BottomNavbar } from './components/bottomnavbar/bottomnavbar';


function App() {
  return (
   <>
  <WishlistProvider>
  <CartProvider>
  <CompareProvider>
   <BrowserRouter>
   <NavBarComp></NavBarComp>
 <AppRouter></AppRouter>
 <Footer></Footer>
 <BottomNavbar></BottomNavbar>
   </BrowserRouter>
   </CompareProvider>
   </CartProvider>
   </WishlistProvider>
   </>
  );
}

export default App;
