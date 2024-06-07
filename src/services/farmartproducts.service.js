
import { read } from "./context.service"

const producturl="http://localhost:4002/getproduts/"
export function getFormartProduct(){
    return read(producturl);
}
