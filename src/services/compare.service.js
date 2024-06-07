import { read } from "./context.service"


let wishlisturl="http://localhost:4002/comparedata" 
export function getCompare(){
    return(
        read(wishlisturl)
    )
}