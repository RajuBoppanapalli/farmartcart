import { createContext, useEffect, useState } from "react";
import { getcartdata } from "./cart.service";
import axios from "axios";


export const CartContext=createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    

    const [userData, setUserData] = useState(null);
   

    useEffect(() => {
        const data = localStorage.getItem("userdata");
        if (data) {
            setUserData(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
       
       if (userData && userData.length > 0) {
            const cid = userData[0].customerid;
            axios.get(`http://localhost:4002/getcartdata/${cid}`).then((res) => {
            setCart(res.data);
            setCartCount(res.data.length);
        });
    }
    }, [userData]);

    
    const addToCart = (item) => {
        setCart([...cart, item]);
        window.location.reload();
        setCartCount(cartCount + 1);
       
    };

    
    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        setCartCount(cartCount - 1);
        window.location.reload();
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                cartCount,
                addToCart,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
