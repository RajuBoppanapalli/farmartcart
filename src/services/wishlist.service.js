import { read } from "./context.service";

let wishlisturl="http://localhost:4002/wishlistdata" 
export function getwishlist(){
    return(
        read(wishlisturl)
    )
}