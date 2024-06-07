import { read } from "./context.service"


let userurl="http://localhost:4002/customers"
export function getcustomers(){
    return(
  read(userurl)  
    )
}