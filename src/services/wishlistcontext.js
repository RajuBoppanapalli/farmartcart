import { createContext, useEffect, useState } from "react";
import { getwishlist } from "./wishlist.service";
import axios from "axios";

export const WishlistContext=createContext();
   
export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const [wishlistCount, setWishlistCount] = useState(0);
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
            axios.get(`http://localhost:4002/getwishlistdata/${cid}`).then((res) => {
            setWishlist(res.data);
            setWishlistCount(res.data.length);
            });
        }
    }, [userData]);

    
    const addToWishlist = (item) => {
        setWishlist([...wishlist, item]);
        setWishlistCount(wishlistCount + 1);
    };

   
    const removeFromWishlist = (id) => {
        const updatedWishlist = wishlist.filter((item) => item.id !== id);
        setWishlist(updatedWishlist);
        setWishlistCount(wishlistCount - 1);
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                wishlistCount,
                addToWishlist,
                removeFromWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};